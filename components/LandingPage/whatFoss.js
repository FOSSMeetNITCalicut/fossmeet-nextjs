import React from 'react'
import styles from '../../styles/LandingPage/What.module.css'
import Image from 'next/image'
import img from '../../public/images/assets/foss-meet-expo-final.svg'

export default function whatFoss() {
  return (
    <div className={styles.what_container}>
      <div className={styles.what_heading}>
        <h1>
          What is FOSSMeet? 
        </h1>
        <p>
           An annual gathering to celebrate the freedom in FOSS 
           featuring exciting events, workshops, and brilliant speakers.
        </p>
      </div>
      <div className={styles.what_img}>
        <Image src={img} className={styles.img} alt="FOSS Meet" width="1700" height="700"/>
      </div>
    </div>
  )
}
