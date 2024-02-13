import React from "react";
import styles from "../../styles/LandingPage/Hero.module.css";
import Image from "next/image";
import logo from "../../public/images/assets/landing-page-illustration-1.svg";
import Link from "next/link";
import Notification from "../Notification";
import Button from "../Button";
function Hero() {
  // function show() {
  //   let notif = document.getElementById("notif");
  //   notif.classList.add(styles.show);
  //   setTimeout(() => notif.classList.remove(styles.show), 5000);
  // }

  return (
    <div className={styles.container}>
      {/* <Notification message={"Registration ends today 11 PM"} /> */}
      {/* <div className={styles.notification} id="notif">
        <p>
          Registration ends Feb. 7<sup>th</sup> 11 PM
        </p>
      </div> */}

      <div className={styles.heading}>
        <div className={styles["logo-container"]}>
          <Image
            src={"/images/logos/logo_text.png"}
            alt="FOSS Cell NITC"
            className={styles.img}
            height="479px"
            width="1920px"
          />
        </div>
        <h3 className={styles["date"]}>
          @ NIT CALICUT  <br />
          MARCH 22-24, 2024
          {/* <br /> and Open. */}
        </h3>
        <p>
          {/* To our sponsors, speakers, participants and everyone involved in making FOSSMeet&apos;23 one to remember. */}
        </p>
        {/* {Added custom class for button in home page} */}

        <div className={styles['hero-proposal-button']}>
          <Button
            text="Join Our Telegram Channel"
            toLink="https://t.me/foss_meet"
            className={styles['hero-button']}
          />
        </div>
        <div className={styles['hero-proposal-button']}>
          <Button
            text="Submit Your Proposals"
            toLink="https://hasgeek.com/fosscell/fossmeet24/"
            className={styles['hero-button']}
          />
        </div>

        <div className={styles['hero-proposal-button']}>
          <Button
            text="FOSSMeet'23 gallery"
            toLink="/gallery"
          />
        </div>

      </div>
      <div className={styles["image-container"]}>
        <Image
          src={logo}
          alt="FOSS Cell NITC"
          className={styles.img}
          height="700px"
          width="1000px"
        />
      </div>
    </div>
  );
}

export default Hero;
