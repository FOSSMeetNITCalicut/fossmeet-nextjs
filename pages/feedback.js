import Banner from "../components/Banner";
import styles from "../styles/Contacts.module.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Head from "next/head";
function Feedback() {
  return (
    <div>
      <Banner
        image="contacts.webp"
        subtitle="Your valuable"
        title="Feedback"
      />
      <div className={`${styles.container}`}>
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Feedback;
