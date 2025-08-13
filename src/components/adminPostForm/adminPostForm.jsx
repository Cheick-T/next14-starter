"use client";
import styles from "./adminPostForm.module.css"
import {addPost} from "@/lib/action"
import {useFormState} from "react-dom"

const AdminPostForm = ({userId}) => {
    const [state, formAction] = useFormState(addPost, undefined)

    return (
        <form action={formAction} className={styles.container}>
            <h1>Add Post</h1>
            <input type ="hidden" name = "userId" value = {userId}/>
            <input type ="text" name = "title" placeholder="Title"  />
            <input type ="text" name = "slug" placeholder="Slug"  />
            <textarea type ="text" name = "desc" placeholder="Description" rows = {10} />
            <button> Add Post </button>
            {state && state.Error}

        </form>
    )



} 

export default AdminPostForm;