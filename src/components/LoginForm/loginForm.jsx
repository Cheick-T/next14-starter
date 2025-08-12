"use client"
import { Handlelogin } from "@/lib/action"
import { useFormState } from "react-dom"
import styles from "./loginForm.module.css"
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import Link from "next/link"

const LoginForm = () => {
    const [state, formAction] = useFormState(Handlelogin, undefined  )
    const router = useRouter();
    // useEffect ( () => {
    //     state?.success && router.push('/login')
    // }, [state?.success, router])

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="user name" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button> Login </button>
            {state?.error}
            <Link href = "/register"> {"Don't Have a account ?"} <b>Login</b></Link>
        </form>
    )
}

export default LoginForm