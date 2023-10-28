import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <Link href="/">
          <a className={styles["nav-logo"]}>
            <span className="typed">FOSSMeet&apos;24</span>
          </a>
        </Link>
        <div className={styles["dropdown"]} onClick={toggleDropdown}>
          <a className={styles["nav-link-dropdown", "dropdown-heading"]}>
            FossMeet 23
          </a>
          {showDropdown && (
            <div className={styles["dropdown-content"]}>
              <ul className={styles["dropdown-menu"]}>
                <li className={styles["dropdown-item"]}>
                  <Link href="/gallery">
                    <a
                      className={styles["nav-link-dropdown"]}
                      onClick={toggleButton}
                    >
                      Gallery
                    </a>
                  </Link>
                </li>
                <li className={styles["dropdown-item"]}>
                  <Link href="/speakers">
                    <a
                      className={styles["nav-link-dropdown"]}
                      onClick={toggleButton}
                    >
                      Speakers
                    </a>
                  </Link>
                </li>
                <li className={styles["dropdown-item"]}>
                  <Link href="/workshops">
                    <a
                      className={styles["nav-link-dropdown"]}
                      onClick={toggleButton}
                    >
                      Workshops
                    </a>
                  </Link>
                </li>
                <li className={styles["dropdown-item"]}>
                  <Link href="/events">
                    <a
                      className={styles["nav-link-dropdown"]}
                      onClick={toggleButton}
                    >
                      Events
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles["flex-row"]}>
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
          <div className={styles["dropdown"]} onClick={toggleDropdown}>
            <a className={styles["nav-link-dropdown", "dropdown-mobile-heading"]}>
              FossMeet 23
            </a>
            {showDropdown && (
              <div className={styles["dropdown-content"]}>
                <ul className={styles["dropdown-menu"]}>
                  <li className={styles["dropdown-item"]}>
                    <Link href="/gallery">
                      <a
                        className={styles["nav-link-dropdown"]}
                        onClick={toggleButton}
                      >
                        Gallery
                      </a>
                    </Link>
                  </li>
                  <li className={styles["dropdown-item"]}>
                    <Link href="/speakers">
                      <a
                        className={styles["nav-link-dropdown"]}
                        onClick={toggleButton}
                      >
                        Speakers
                      </a>
                    </Link>
                  </li>
                  <li className={styles["dropdown-item"]}>
                    <Link href="/workshops">
                      <a
                        className={styles["nav-link-dropdown"]}
                        onClick={toggleButton}
                      >
                        Workshops
                      </a>
                    </Link>
                  </li>
                  <li className={styles["dropdown-item"]}>
                    <Link href="/events">
                      <a
                        className={styles["nav-link-dropdown"]}
                        onClick={toggleButton}
                      >
                        Events
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={styles["foss-logo"]}>
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
        </div>
      )}
    </header>
  );
}
