import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils";
import { User } from "@/lib/models"
import bcrypt from "bcrypt"


const login = async (credentials) => {

  try {

    connectToDb()
    console.log("--------------------------------user SEARCH")
    const user = await User.findOne({ username: credentials.username })
    console.log(user)

    if (!user) {
      throw new Error("User not found")
    }
    console.log("--------------------------------user find")
    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
    if (!isPasswordCorrect) {
      throw new Error("Wrong credentials");
    }
    console.log("Password check done")
    return user

  } catch (err) {
    throw new Error("Fail to login")
  }

}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user

        } catch (err) {
          return null;
        }
      }

    }),

  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
      if (account.provider === 'github') {
        connectToDb();

        try {
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            console.log("--------Try to create");
            const newUser = new User({
              username: profile.login,
              email: profile.email,
            });
            await newUser.save();

          }

        } catch (err) {
          console.log(err)
          return false
        }
      }
      return true

    }
  }

})
