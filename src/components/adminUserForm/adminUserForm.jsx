"use client";
import styles from "./adminUserForm.module.css"
import { addUser } from "@/lib/action"
import { useFormState } from "react-dom"

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined)


    return (
        <form action={formAction} className={styles.container}>
            <h1>Add user</h1>
            <input type="text" name="username" placeholder="User's name" />
            <input type="text" name="email" placeholder="eamil" />
            <input type="password" name="password" placeholder="password" />
            <select name = "isAdmin">
                <option value = "false">Is admin ?</option>
                <option value = "false">User</option>
                <option value = "true">Admin</option>
            </select>
            
            <button> Add User </button>
            {state && state.error}

        </form>
    )



}

export default AdminUserForm;