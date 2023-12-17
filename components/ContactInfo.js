import styles from "../styles/Contacts.module.css";
import contact_image from '../public/images/assets/Email_PNG.png'
import { BsPinMapFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className={styles["contact-info"]}>
      <div className={styles["contact-info__header"]}>
        <p className={styles["contact-info__header__sub-title"]}>
          Feel free to reach out to us
        </p>
        <h2 className={styles["contact-info__header__title"]}>Contact Info</h2>
      </div>

      <div className={styles["contact-info__main"]}>
        <div className={styles["contact-info__main__info"]}>
          <div className={styles["contact-info__main__info__box"]}>
            <div className={styles["contact-info__main__info__box__image"]}>
              <BsPinMapFill />
            </div>
            <div className={styles["contact-info__main__info__box__text"]}>
              <p>First Floor</p>
              <p>Student Amenity Center</p>
              <p>NITC</p>
            </div>
          </div>

          <div className={styles["contact-info__main__info__box"]}>
            <div className={styles["contact-info__main__info__box__image"]}>
              <MdAlternateEmail />
            </div>
            <p className={styles["contact-info__main__info__box__text"]}>
              info@fossmeet.net
            </p>
          </div>

          <div className={styles["contact-info__main__info__box"]}>
            <div className={styles["contact-info__main__info__box__image"]}>
              <BsFillTelephoneFill />
            </div>
            <p className={styles["contact-info__main__info__box__text"]}>
              Aftab : +91 94004 30812<br/>
              Madhav: +91 98952 87476
            </p>
          </div>
        </div>

        <div className={styles["contact-info__main__picture"]}>
          <Image
            src={contact_image}
            alt="Contact Us Image"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
