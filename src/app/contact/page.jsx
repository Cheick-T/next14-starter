import styles from './contact.module.css';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.contactMainDiv}>
      <div className = {styles.Imgcontainer}>
        <Image className = {styles.img} src = "/contact.png" alt = "Image for contact" fill/>
      </div>
    
      <div  className={styles.FormDiv}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surname" className={styles.inputField} required />
          <input type="email" placeholder="Email" className={styles.inputField} required />
          <input type="text" placeholder="Phone number" className={styles.inputField}  />
          <textarea 
          placeholder="Message"  
          className={styles.textArea} 
          name=""
          id=""
          cols="50"
          rows="10"
          ></textarea>
          <button type="submit" className={styles.submitButton}>Send</button>
        </form>
      </div>
    
    </div>



  )
};

export default Contact;



