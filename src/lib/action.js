"use server";
import { connectToDb } from "./utils";
import {Post} from "./models"
import { revalidatePath } from "next/cache";


export const deletePost = async(formData) =>{
    

    const {postId} = Object.fromEntries(formData);

    try{
        connectToDb();
        
        await Post.findByIdAndDelete(postId);
        console.log(`Post with ${postId} delete to db`);
        revalidatePath("/blog");

    }catch(err){
        console.log("Something went wrong during connecting to detele a post");
        console.log(err);
        return {err : "Something went wrong during connecting to detele a post"}
    }
};

export const addPost = async(formData) =>{
   
    const {title, desc, slug, userId} = Object.fromEntries(formData);

    try{
        connectToDb();
        const newPost = new Post({ title, desc, slug, userId});
        await newPost.save();
        console.log("Save to db");
        revalidatePath("/blog");

    }catch(err){
        console.log("Something went wrong during connecting to register a post");
        throw new Error(err);
    }
};

