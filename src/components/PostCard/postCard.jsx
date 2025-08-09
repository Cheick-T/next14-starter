
import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = ({post}) => {
    return (
        <div className={styles.Pcontainer}>
            <div className={styles.top}>
                <div className={styles.ImgContainer}>
                    <Image alt = "Img blog" className={styles.img} src ="/hero.gif" fill />
                </div>
                <span className={styles.date}>25.07.2025</span>

            </div>

            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.des} > {post.desc}</p>
                <Link className={styles.link} href = {`blog/${post.slug}`}> Read more</Link>

            </div>

        </div>
    )
}

export default PostCard;