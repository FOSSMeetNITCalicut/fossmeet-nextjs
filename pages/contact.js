import ContactInfo from "../components/ContactInfo";
import styles from "../styles/Contacts.module.css";

export default function Contact() {
    return <div >
        <div className={styles['spacer']}></div>
        <div className={styles['contact-us']}>
            <ContactInfo />
        </div>
        <div className={styles['spacer']}></div>
    </div>
}