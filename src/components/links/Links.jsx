"use client";


import Link from 'next/link';
import React from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink.jsx';


const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

const Links = () => {

    const session = true;
    const isAdmin = true;
    const [open, setOpen] = React.useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}></NavLink>))
                }

                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink item={{ href: "/admin", label: "Admin" }} key="admin" />
                        )}
                        <button className={styles.logout}>Logout</button>
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
