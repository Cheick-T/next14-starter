"use server";
import bcript from "bcryptjs"
import { connectToDb } from "./utils";
import {Post, User} from "./models"
import { revalidatePath } from "next/cache";
import { signIn, signOut} from "@/lib/auth"
import { redirect } from "next/navigation";


export const deletePost = async( formData) =>{
    "use server";
    

    const {postId} = Object.fromEntries(formData);

    try{
        connectToDb();
        
        await Post.findByIdAndDelete(postId);
        console.log(`Post with ${postId} delete to db`);
        revalidatePath("/blog");
        revalidatePath("/admin");

    }catch(err){
        console.log("Something went wrong during connecting to detele a post");
        console.log(err);
        return {err : "Something went wrong during connecting to detele a post"}
    }
};

export const addPost = async(previousState, formData) =>{
   
    const {title, desc, slug, userId} = Object.fromEntries(formData);

    try{
        connectToDb();
        const newPost = new Post({ title, desc, slug, userId});
        await newPost.save();
        console.log("Save to db");
        revalidatePath("/blog");
        revalidatePath("/admin");

    }catch(err){
        console.log("Something went wrong during connecting to register a post");
        throw new Error(err);
    }
};

export const deleteUser = async( formData) =>{
    

    const {id} = Object.fromEntries(formData);

    try{
        connectToDb();
        await Post.deleteMany({userId : id})
        await User.findByIdAndDelete(id);
        console.log(`User with ${id} delete to db`);
        revalidatePath("/admin");
        

    }catch(err){
        console.log("Something went wrong during connecting to detele a user");
        console.log(err);
        return {err : "Something went wrong during connecting to detele a user"}
    }
};

export const addUser = async(previousState, formData) =>{
   
    const {username, email, password} = Object.fromEntries(formData);

    try{
        connectToDb();
        const newUser = new User({ username, email, password});
        await newUser.save();
        console.log("Save to db");
        revalidatePath("/admin");

    }catch(err){
        console.log("Something went wrong during connecting to register a user");
        throw new Error(err);
    }
};


export const handleGithubLogin = async () => {
      await signIn("github", { redirectTo: "/" });
  };

export const handleLogout = async () => {
      await signOut();
  };

export const handleRegister = async (previousState, formData) => {
    const {username, email, password, passwordRepeat} = Object.fromEntries(formData);

    if (password !== passwordRepeat){ return {error: "Password doesnt match"};}

    try{
        connectToDb();
        const user = await User.findOne({username})
        if (user) { return {error: "User already exists"}; }
        const salt = await bcript.genSalt(10);
        const hashedPassword = await bcript.hash(password, salt)
        const newUser = new User ({ username, email, password : hashedPassword});
        console.log("Try to save")
        await newUser.save();
        console.log("User save in database throughout register form")
        return {success: true}

    }catch(err){
        console.log(err)
        return {error : "Something went wrong during connecting to register a user"};
    }
  };



export const Handlelogin = async (previousState, formData) => {
    const {username,  password} = Object.fromEntries(formData);

    try{
        console.log("--------------------------------debut cred")
        const res = await signIn("credentials",  {username, password, redirect: false ,})
        console.log("[action] signIn result", res);
        redirect("/");

    }catch(err){
        console.log(err.message)
        if (err.message.includes("credentialssignin")){return {error :  "Wrong credentials"};}

        throw err;
    }
  };