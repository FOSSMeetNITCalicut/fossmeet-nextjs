import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import {
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsMastodon,
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
      </div>
      <div className={`${styles["flex-row"]}`}>
        <p>
          FOSSMeet&apos;23 - an event conducted by FOSSCell of National
          Institute of Technology Calicut
        </p>
        <div className={styles["flex-row"]}>
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
