import React from "react";
import styles from "../../styles/LandingPage/Hero.module.css";
import Image from "next/image";
import logo from "../../public/images/assets/landing-page-illustration-1.svg";
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
        <h1>
          Thank you!
          {/* <br /> and Open. */}
        </h1>
        <p>
          To our sponsors, speakers, participants and everyone involved in making FOSSMeet&apos;23 one to remember.
        </p>
        <div className={styles['hero-buttons']}>
          <Button
            text="Feedback"
            toLink="/feedback"
          />
          <Button
            text="Certificates"
            toLink="https://certificates.fossmeet.net"
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
