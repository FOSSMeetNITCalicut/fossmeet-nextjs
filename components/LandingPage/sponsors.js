import React from 'react'
import styles from '../../styles/LandingPage/Sponsor.module.css'
import Image from 'next/image'
import img1 from '../../public/images/sponsors/nilenso1.png'
import img2 from '/public/images/sponsors/FOSS United.svg'
import img3 from '/public/images/sponsors/ICFOSS.png'
import img4 from '/public/images/sponsors/FSF.png'
import Link from 'next/link'

function sponsors() {
  return (
    <div className={styles.sponsors}>
      <div className={styles.sponsors_heading}>
        <p>
          A huge thank you to
        </p>
        <h1>
          Our Sponsors
        </h1>
      </div>
      <div className={styles.sponsors_images}>
        <a href={"http://nilenso.com"} className={styles.sponsors_image} target="_blank" rel='noreferrer'>
          <Image src={img1} width={240} height={120} className={styles.img} alt="Nilenso"/>
        </a>
        <a href={"http://fossunited.org"} className={styles.sponsors_image} target="_blank" rel='noreferrer' >
          <Image src={img2} width={150} height={120} className={styles.img} alt="FOSS United"/>
        </a>
        {/* <a href={"http://icfoss.in"} className={styles.sponsors_image} target="_blank" rel='noreferrer' >
          <Image src={img3} width={200} height={180} className={styles.img} alt="ICFOSS"/>
        </a> */}
        <a href={"https://fsf.org"} className={styles.sponsors_image} target="_blank" rel='noreferrer' >
          <Image src={img4} width={200} height={180} className={styles.img} alt="FSF"/>
        </a>
      </div>
    </div>
  )
}

export default sponsors