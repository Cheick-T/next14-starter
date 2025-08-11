import Links from '@/components/links/Links';
import styles from './navbar.module.css';
import {auth} from '@/lib/auth'

const Navbar = async () => {
    const session = await auth();
    console.log("Session in Navbar: ", session);

    return (
        <div className={styles.container}>
            <div className={styles.logo}> Logo</div>
            <div>
                <Links session = {session}> </Links>

            </div>

        </div>
    )
}

export default Navbar;