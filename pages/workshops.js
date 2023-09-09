import React from "react";
import styles from "../styles/Speakers-Workshops.module.css";

import imgRust from "../public/images/workshops/Rust.svg";
import imgNest from "../public/images/workshops/nest.png";
import imgServer from "../public/images/workshops/server.png";

import Image from "next/image";
import Banner from "../components/Banner";

import { useState } from "react";
import {
  BsFacebook,
  BsGlobe,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsGithub,
} from "react-icons/bs";
import Link from "next/link";

function Workshops() {
  const workshopsData = [
    {
      host: "Kerala Rustaceans",
      description:
        "Kerala Rustaceans is a group that aims to create a community of Rust enthusiasts who can learn, collaborate and share knowledge on projects related to Rust. The group also aims to promote the use of Rust in the state and to attract more developers to the language. They usually organise events, meetups, and hackathons to discuss and learn about the latest developments in Rust, and to share their experiences and ideas with others. They also have an online presence on social platforms like Telegram and Twitter for discussions, sharing resources, and for helping others.",
      img: imgRust,
      name: "Rust Workshop",
      wSpeakers: [
        "Devdutt Shenoi",
        "Sreehari Prasad",
        "Advaith Narayanan",
        "Alen P Varghese",
      ],
      links: {
        facebook: "",
        instagram: "",
        // web: "https://community.mozilla.org/en/groups/kerala-rustaceans/",
        // twitter: "https://twitter.com/keralars",
        youtube: "",
      },
      redirect: "/events/9",
    },
    {
      host: "NeST developers",
      description:
        "NeST is a python3 package aiding researchers and beginners alike in emulating real-world networks. It is an Open-Source project which simplifies the process of performing networking experiments using Linux network namespaces.",
      img: imgNest,
      name: "NeST Workshop",
      wSpeakers: ["Narayan G", "Shanthanu Rai"],
      links: {
        facebook: "",
        instagram: "",
        // web: "https://nest.nitk.ac.in/",
        twitter: "",
        youtube: "",
      },
      redirect: "/events/10",
    },
    {
      host: "Kaustubh Patil",
      description:
        "A hands-on workshop on Cloud Self-Hosting. Set up and maintain your own cloud infrastructure using popular open-source technologies. Discover the benefits of self-hosting, such as increased privacy, flexibility, cost savings and learn to deploy and manage virtual machines.",
      img: imgServer,
      name: "Self Hosting 101",
      links: {
        facebook: "",
        instagram: "",
        web: "",
        twitter: "",
        youtube: "",
      },
      redirect: "/events/11",
    },
  ];

  return (
    <div>
      <Banner title="Workshops" subtitle="Explore our" />

      <div className={styles.container}>
        {workshopsData &&
          workshopsData.map((workshop, index) => {
            return (
              <div className={styles["workshop-anchor"]} key={index}>
                <Workshop data={workshop} id={index} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

function Workshop(workshopData) {
  let workshop = workshopData.data;
  let key = workshopData.id;

  let [open, setOpen] = useState(false);

  function revealDescription(e) {
    e.preventDefault();
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
      <div className={styles.wImageContainer}>
        <Image
          src={workshop.img}
          alt={`Photo of ${workshop.host}`}
          width="400"
          height="400"
          className={styles.wImage}
        />
      </div>
      <div className={styles.details}>
        <div className={styles["personal-info-web"]}>
          <h2 className={styles.name}>{workshop.name}</h2>
          <p className={styles.description}>{workshop.description}</p>
        </div>
      </div>
      <div className={styles.events}>
        <div>
          <summary className={styles["summary-name"]}>
            <h3>{workshop.name}</h3>
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
          </summary>
          <h3 className={`${styles.talk} ${styles.name}`}>Conducted by</h3>
          <p>{workshop.host}</p>
        </div>

        {/* Workshop speakers */}
        {workshop.wSpeakers ? (
          <div className={styles["workshop-speakers"]}>
            <h3 className={styles.hosts}>Hosts</h3>
            {workshop["wSpeakers"].map((speaker, i) => {
              return <li key={i}>{speaker}</li>;
            })}
          </div>
        ) : (
          ""
        )}

        {/* Links */}
        <div className={styles.links}>
          {workshop.links.web && (
            <a
              href={workshop.links.web}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGlobe size={25} className={styles["link-icon"]} />
            </a>
          )}
          {workshop.links.github && (
            <a
              href={workshop.links.github}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={25} className={styles["link-icon"]} />
            </a>
          )}
          {workshop.links.facebook && (
            <a
              href={workshop.links.facebook}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={25} className={styles["link-icon"]} />
            </a>
          )}
          {workshop.links.instagram && (
            <a
              href={workshop.links.instagram}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={25} className={styles["link-icon"]} />
            </a>
          )}
          {workshop.links.twitter && (
            <a
              href={workshop.links.twitter}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={25} className={styles["link-icon"]} />
            </a>
          )}
          {workshop.links.youtube && (
            <a
              href={workshop.links.youtube}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube size={25} className={styles["link-icon"]} />
            </a>
          )}
          {workshop.links.linkedin && (
            <a
              href={workshop.links.linkedin}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={25} className={styles["link-icon"]} />
            </a>
          )}
        </div>
      </div>

      {/* Mobile description */}
      <p id={`description-${key}`} className={styles["description-mob"]}>
        {workshop.description}
      </p>
    </div>
  );
}

export default Workshops;
