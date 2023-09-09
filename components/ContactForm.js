import styles from "../styles/Contacts.module.css";
import { useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jqltzdpmkmeifkbxgcmz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxbHR6ZHBta21laWZrYnhnY216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3NjY2ODcsImV4cCI6MTk4OTM0MjY4N30.QvRMaPXEmO-s3zq0qZpqOID38tujl1qsXWmVhzllXPo"
const supabase = createClient(supabaseUrl, supabaseKey)

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault()
    
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setToast("✅ Your Message has been sent");
    setTimeout(() => setToast(""), 3000);
    
    const { data, error } = await supabase.from('Messages').insert([{ 'full name': fullName, 'email': email,  'phone number': phone, 'message': message},])

  };

  return (
    <form onSubmit={sendMessage} className={styles.form}>
      <input
        placeholder="Name"
        type="text"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
          setToast("");
        }}
        className={styles["form-control"]}
        required
      ></input>
      <input
        placeholder="Email Address"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setToast("");
        }}
        className={styles["form-control"]}
        required
      ></input>
      <input
        placeholder="Phone Number"
        type="number"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          setToast("");
        }}
        className={styles["form-control"]}
      ></input>
      <textarea
        placeholder="Your feedback ..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setToast("");
        }}
        rows={5}
        className={styles["form-control"]}
        required
      ></textarea>
      <div className={styles["form-button"]}>
        <button type="submit" className={styles['submit-button']}>Submit</button>
        {toast && <p className={styles.toast}>{toast}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
