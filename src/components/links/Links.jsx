"use client";


import Link from 'next/link';
import React from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink.jsx';
import {handleLogout} from "@/lib/action"



const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

const Links = ({session}) => {

    
    const isAdmin = true;
    const [open, setOpen] = React.useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}></NavLink>))
                }

                {session?.user ? (
                    <>
                        {session.user?.isAdmin  && (
                            <NavLink item={{ href: "/admin", label: "Admin" }} key="admin" />
                        )}
                        <form action = {handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                        
                    </>


                ) : (
                    <NavLink item={{ href: "/login", label: "Login" }} key="login" />
                )


                }
            </div>
            <button className={styles.MenuButton} onClick={ () => setOpen(prev => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            }
        </div>

    )

}
export default Links;
