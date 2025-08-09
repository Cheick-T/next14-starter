import styles from "./postUser.module.css"
import { getUser } from "@/lib/data"

// const getUser = async (UserId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${+UserId}`)
  
//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }
//   return res.json()

// }

const PostUser = async ({userId}) => {
    //const user = await getUser(userId)

    const user = await getUser(userId)

    return (
        <div className={styles.container}>
            <span className={styles.title} >Author</span>
            <span className={styles.userName} >{user.username}</span>
        </div>
    )
}

export default PostUser;