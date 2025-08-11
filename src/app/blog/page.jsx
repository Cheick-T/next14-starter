import styles from "./blog.module.css"
import PostCard from "@/components/PostCard/postCard";
import { getPosts } from "@/lib/data";


// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache : "no-store"})
//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }
//   return res.json()

// }

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {cache : "no-store"})
  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  return res.json()

}
const Blog = async () => {
  // FETCH FROM API
  const posts = await getData();

  //FETCH With ServerAction from Database
  //const posts = await getPosts()
  return (
    <div className={styles.BlogContainer}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}></PostCard>
        </div>
      )

      )

      }


    </div>

  )
};

export default Blog;


