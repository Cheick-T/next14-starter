import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'about page',
  description: 'About  ',
}

const About = () => {
  return (
  <div  className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        We are a team of passionate individuals dedicated to providing the best service possible. Our mission is to innovate and create solutions that make a difference in the lives of our users. We believe in transparency, integrity, and excellence in everything we do.
      </p>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h1> 10 K+</h1>
          <p>Year of experience</p>
        </div>
        <div className={styles.box}>
          <h1> 10 K+</h1>
          <p>Year of experience</p>
        </div>
        <div className={styles.box}>
          <h1> 10 K+</h1>
          <p>Year of experience</p>
        </div>

      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image className={styles.img} src ="/about.png" alt="About Us"  fill />
    </div>
  </div>)
};

export default About;


