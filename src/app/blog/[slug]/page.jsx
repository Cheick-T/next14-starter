import styles from "./SinglePostPage.module.css"
import PostUser from "@/components/postUser/postUser";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";


// FETCH DATA FROM API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${+slug}`, {cache: "no-store"})
  
//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }
//   return res.json()

// }


export const generateMetadata = async ({params}) =>{
  const {slug} = params;
  const post = await getPost(slug);

  return {
    title : post.title,
    description : post.desc,
  }
}



const SinglePostPage = async({params}) => {

  
  const {slug} =  params
  //const post = await getData(slug);
  const post =  await getPost(slug);
  
  
  return (
    <div className={styles.PostContainer}>

      <div className={styles.ImgContainer}>
        <Image className={styles.img} alt ="Blog Image" src ="/hero.gif" fill/>

      </div>

      <div className={styles.TextContainer}>

        <h1 className={styles.title}> {post.title} </h1>
        <div className={styles.detail}>
          <Image  className={styles.avatar} alt ="Blog Image" src ="/noavatar.png" width={50} height={50}/>
          { <Suspense fallback = {<div>Loading...</div>}>
            <PostUser userId = {post.userId}/>
          </Suspense> }
          

          <div className={styles.detailText}>
              <span className={styles.detailTitle} >Publish</span> 
              <span className={styles.detailValue} >25-04-2025</span> 
          </div>
        </div>
        <div className={styles.content}>
            {post.body}
        </div>


      </div>
      
    </div>
  )
}


export default SinglePostPage;


