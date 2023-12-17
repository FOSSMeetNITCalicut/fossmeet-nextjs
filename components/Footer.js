import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import {
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsMastodon,
  BsTelegram,
} from "react-icons/bs";
export default function Footer() {
  return (
    <footer className={`${styles["footer"]} ${styles["flex-col"]}`}>
      <div className={`${styles["footer-top"]} ${styles["margin-bottom"]}`}>
        <div className={styles["logos"]}>
          <Link href="https://fosscell.org/">
            <a className={styles["nav-link-logo"]}>
              <Image
                src={"/images/logos/fosscell-logo.jpg"}
                alt={"FOSSCell logo"}
                width="100%"
                height="40%"
                objectFit="contain"
              />
            </a>
          </Link>
          <Link href="/">
            <a className={styles["nav-link-logo"]}>
              <Image
                src={"/fossmeet favicon.png"}
                alt={"FOSSCell logo"}
                width="40"
                height="40"
                objectFit="contain"
              />
            </a>
          </Link>
          {/* <Link href="https://minerva.nitc.ac.in/?q=activities/computer-science-and-engineering-association">
            <a className={styles["nav-link-logo"]}>
              <Image
                src={"/csea-logo.jpg"}
                alt={"CSEA logo"}
                width="40%"
                height="40%"
                objectFit="contain"
              />
            </a>
          </Link> */}
          <Link href="http://www.nitc.ac.in">
            <a className={styles["nav-link-logo"]}>
              <Image
                src={"/images/logos/nitc-logo.png"}
                alt={"NITC logo"}
                width="40%"
                height="40%"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        <div>
          <div className={styles["nav-menu"]}>
            {/* <Link href="/competition" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Competition</a>
            </Link>  */}
            {/* <Link href="/schedule" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Schedule</a>
            </Link> */}



            {/* <Link href="/gallery" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Gallery</a>
            </Link>
            <Link href="/feedback" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Feedback</a>
            </Link>
            <Link href="/speakers" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Speakers</a>
            </Link>
            <Link href="/workshops" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Workshops</a>
            </Link>
            <Link href="/events" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Events</a>
            </Link> */}


            {/* <Link href="/faqs" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>FAQ</a>
            </Link> */}
            {/* <Link href="/media" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Media</a>
            </Link> */}
            {/* <Link href="/code-of-conduct" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Code of Conduct</a>
            </Link> */}
            <Link href="/contact" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles["flex-row"]}`}>
        <p>
          FOSSMeet&apos;24 - an event conducted by FOSSCell of National
          Institute of Technology Calicut
        </p>
        <div className={styles["flex-row"]}>
          <Link href="https://t.me/foss_meet">
            <BsTelegram className={styles["logo"]} size="20" />
          </Link>
          <Link href="https://mastodon.social/@FOSSCell@floss.social">
            <BsMastodon className={styles["logo"]} size="20" />
          </Link>
          <Link href="https://www.instagram.com/fosscellnitc/">
            <BsInstagram className={styles["logo"]} size="20" />
          </Link>
          <Link href="https://twitter.com/fosscell">
            <BsTwitter className={styles["logo"]} size="20" />
          </Link>
          <Link href="https://www.linkedin.com/company/foss-cell-nitc/">
            <BsLinkedin className={styles["logo"]} size="20" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
