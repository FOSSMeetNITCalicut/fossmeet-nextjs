import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Typed from "typed.js";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  // var options = {
  //   strings: ["FOSSMeet&apos;23", "Feb 10-12", "1 day to go"],
  //   typeSpeed: 80,
  //   backSpeed: 60,
  //   backDelay: 6000,
  //   loop: true,
  //   showCursor: false,
  // };

  // let typed;
  // useEffect(() => {
  //   typed = new Typed(".typed", options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <Link href="/">
          <a className={styles["nav-logo"]}>
            <span className="typed">FOSSMeet&apos;24</span>
          </a>
        </Link>
        <div className={styles["nav-menu"]}>
          <Link href="/gallery">
            <a className={styles["nav-link"]}>Gallery</a>
          </Link>
          {/* <Link href="/feedback">
            <a className={styles["nav-link"]}>Feedback</a>
          </Link> */}
          {/* <Link href="/schedule">
            <a className={styles["nav-link"]}>Schedule</a>
          </Link> */}
          <Link href="/speakers">
            <a className={styles["nav-link"]}>Speakers</a>
          </Link>
          <Link href="/workshops">
            <a className={styles["nav-link"]}>Workshops</a>
          </Link>
          <Link href="/events">
            <a className={styles["nav-link"]}>Events</a>
          </Link>
          {/* <Link href="/faqs">
            <a className={styles["nav-link"]}>FAQ</a>
          </Link> */}
          {/* <Link href="code-of-conduct">
            <a className={styles["nav-link"]}>Code of Conduct</a>
          </Link> */}
        </div>
        <div className={styles["flex-row"]}>
          {/* <Button text="Register" toLink={"register"} /> */}
          <div className={styles["hamburger"]}>
            {toggle ? (
              <IoMdClose
                onClick={() => {
                  toggleButton();
                }}
                size="30"
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => {
                  toggleButton();
                }}
                size="30"
              />
            )}
          </div>
        </div>
      </nav>
      {toggle && (
        <div className={styles["navbar-mobile"]}>
          <div className={styles["nav-menu-mobile"]}>
            <Link href="/gallery">
              <a
                className={styles["nav-link-mobile"]}
                onClick={() => {
                  toggleButton();
                }}
              >
                Gallery
              </a>
            </Link>
            {/* <Link href="/feedback">
              <a
                className={styles["nav-link-mobile"]}
                onClick={() => {
                  toggleButton();
                }}
              >
                Feedback
              </a>
            </Link> */}
            {/* <Link href="/schedule">
              <a
                className={styles["nav-link-mobile"]}
                onClick={() => {
                  toggleButton();
                }}
              >
                Schedule
              </a>
            </Link> */}
            <Link href="/speakers">
              <a
                className={styles["nav-link-mobile"]}
                onClick={() => {
                  toggleButton();
                }}
              >
                Speakers
              </a>
            </Link>
            <Link href="/workshops">
              <a
                className={styles["nav-link-mobile"]}
                onClick={() => {
                  toggleButton();
                }}
              >
                Workshops
              </a>
            </Link>
            <Link href="/events">
              <a
                className={styles["nav-link-mobile"]}
                onClick={() => {
                  toggleButton();
                }}
              >
                Events
              </a>
            </Link>
            {/* <Link href="/faqs">
              <a
                className={styles["nav-link-mobile"]}
                onClick={() => {
                  toggleButton();
                }}
              >
                FAQ
              </a> 
              </Link> */}
            {/* <Link href="/media">
              <a
                className={styles["nav-link-mobile"]}
                onClick={() => {
                  toggleButton();
                }}
              >
                Media
              </a>
            </Link> */}
            {/* <Link href="/code-of-conduct">
              <a
                className={styles["nav-link-mobile"]}
                onClick={() => {
                  toggleButton();
                }}
              >
                Code of Conduct
              </a>
            </Link> */}
          </div>
          <Link href="https://fosscell.org/">
            <a
              className={styles["nav-link-logo"]}
              onClick={() => {
                toggleButton();
              }}
            >
              <Image
                src={"/images/logos/fosscell-logo.jpg"}
                alt={"FOSSCell logo"}
                width="150%"
                height="90%"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
