import React from "react";
import styles from "../styles/Speakers-Workshops.module.css";
import Image from "next/image";
import Banner from "../components/Banner";
import { useState, useEffect } from "react";
import {
  BsFacebook,
  BsGlobe,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsGithub,
} from "react-icons/bs";

import speakersData from "/public/speakers.json";

function Speakers() {
  return (
    <div>
      <Banner image="speaker.png" title="Speakers" subtitle="Meet our" />
      <div className={styles.container}>
        {speakersData &&
          speakersData.map((speaker, index) => {
            return <Speaker data={speaker} key={index} id={index} />;
          })}
      </div>
    </div>
  );
}

function Speaker(speaker_data) {
  let speaker = speaker_data.data;
  let key = speaker_data.id;
  let [open, setOpen] = useState(false);

  function revealDescription(e) {
    let key = e.target.id;

    let icon = document.getElementById(key);
    let description = document.getElementById(`description-${key}`);
    let display = window.getComputedStyle(description).display;
    if (display === "none") description.style.display = "block";
    else description.style.display = "none";

    if (open) {
      icon.classList.remove("up-down");
      setOpen(false);
    } else {
      icon.classList.add("up-down");
      setOpen(true);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <Image
          src={speaker.img}
          alt={`Photo of ${speaker.name}`}
          width="350"
          height="350"
          className={styles.Image}
        />
      </div>
      <div className={styles.details}>
        <div className={styles["personal-info-web"]}>
          <h2 className={styles.name}>{speaker.name}</h2>
          <p className={styles.description}>{speaker.description}</p>
        </div>

        {/* {open &&  <p className={styles.description}>{speaker.description}</p>} */}
      </div>
      <div className={styles.events}>
        <div>
          <summary className={styles["summary-name"]}>
            <h3>{speaker.name}</h3>
          </summary>
          <h3 className={`${styles.talk} ${styles.name}`}>Talk</h3>

          {/* Events */}
          <ul>
            {speaker.events.map((speakerEvent) => {
              return <li key={speakerEvent.name}>{speakerEvent.name}</li>;
            })}
          </ul>
        </div>

        {/* Links */}
        <div className={styles.links}>
          {speaker.links.web && (
            <a
              href={speaker.links.web}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGlobe size={25} className={styles["link-icon"]} />
            </a>
          )}
          {speaker.links.github && (
            <a
              href={speaker.links.github}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={25} className={styles["link-icon"]} />
            </a>
          )}
          {speaker.links.facebook && (
            <a
              href={speaker.links.facebook}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={25} className={styles["link-icon"]} />
            </a>
          )}
          {speaker.links.instagram && (
            <a
              href={speaker.links.instagram}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={25} className={styles["link-icon"]} />
            </a>
          )}
          {speaker.links.twitter && (
            <a
              href={speaker.links.twitter}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={25} className={styles["link-icon"]} />
            </a>
          )}
          {speaker.links.youtube && (
            <a
              href={speaker.links.youtube}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube size={25} className={styles["link-icon"]} />
            </a>
          )}
          {speaker.links.linkedin && (
            <a
              href={speaker.links.linkedin}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={25} className={styles["link-icon"]} />
            </a>
          )}
          <img
            width={20}
            height={20}
            onClick={revealDescription}
            id={`${key}`}
            className={`${styles["description-drop-icon"]} ${
              open ? styles["up-down"] : ""
            }`}
            src="/images/assets/chevron-down.svg"
          />
        </div>
      </div>

      {/* Mobile description */}
      <p id={`description-${key}`} className={styles["description-mob"]}>
        {speaker.description}
      </p>
    </div>
  );
}

export default Speakers;
