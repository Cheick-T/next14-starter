import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h1 className= {styles.title}> Creative Thoughts Agency</h1>
        <p className= {styles.des}>
          Welcome to my first Next.js project ! From here I am going to change the world  
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="Brand logos" fill/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="Hero Image" fill className={styles.heroImg}/>
      </div>
    </div>
  )
};

export default Home;