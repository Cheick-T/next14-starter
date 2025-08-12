"use client"
import { handleRegister } from "@/lib/action"
import { useFormState } from "react-dom"
import styles from "./registerForm.module.css"
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import Link from "next/link"

const RegisterForm = () => {
    const [state, formAction] = useFormState(handleRegister, undefined  )
    const router = useRouter();
    useEffect ( () => {
        state?.success && router.push('/login')
    }, [state?.success, router])

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="user name" name="username" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="password again" name="passwordRepeat" />
            <button> Register </button>
            {state?.error}
            <Link href = "/login"> Have a account ? <b>Login</b></Link>
        </form>
    )
}

export default RegisterForm