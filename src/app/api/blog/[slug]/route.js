import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const {slug} = params;
    try{
        connectToDb()
        const post = await Post.findOne({slug:slug})
        return NextResponse.json(post)

    }catch(err){
        console.log(err);
        throw new Error("Fail to fetch a single post !");
    }

};

export const DELETE = async (request, {params}) => {
    const {slug} = params;
    try{
        connectToDb()
        await Post.deleteOne({slug:slug})
        return NextResponse.json("post deleted")

    }catch(err){
        console.log(err);
        throw new Error("Fail to delete a single post !");
    }

};
//TO DELETE add methode : {DELETE} to a fetch that call the API