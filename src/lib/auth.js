import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDb } from "./utils";
import {User} from "@/lib/models"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
        GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),

  ],
  callbacks : {
    async signIn ({user, account, profile}){
      console.log(user, account, profile);
      if (account.provider === 'github'){
        connectToDb();
        
        try{ 
          const user = await User.findOne({email: profile.email})
          if (!user){
            console.log("--------Try to create");
            const newUser = new User({
              username : profile.login,
              email : profile.email,
            });
            await newUser.save();

          }

        }catch(err){
          console.log(err)
          return false
        }
      }
      return true

    }
  }

})
