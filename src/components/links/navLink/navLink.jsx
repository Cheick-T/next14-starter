'use client';
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";


const NavLink = ({ item }) => {
    const pathName = usePathname();

    return (
        <Link 
            href={item.href} 
            key= {item.title} 
            className={`${styles.container} ${pathName === item.href && styles.active}`    }
        >
            {item.label}    
        </Link>
    )
}

export default NavLink;