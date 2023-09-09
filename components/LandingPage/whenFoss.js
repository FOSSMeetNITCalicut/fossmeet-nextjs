import React from 'react'
import Image from 'next/image'
import NITC from '/public/images/assets/rectangle.png'
import imgNITC from '/public/images/assets/NITC.jpeg'
import Button from "../Button";
import styles from '../../styles/LandingPage/When.module.css'

function whenFoss() {
  return (
    <div className={styles.when}>
      <div className={styles.when_heading}>
        <p>
          And finally,<br/> when and where is it?
        </p>
        <h1>
          10-12 February,<br/>
          National Institute of Technology Calicut
        </h1>
        <h4>
          Save the date for the exciting 3 day event. See y&apos;all there 
        </h4>
        {/* <div className={styles.when_button}>
          <Button text="Get Tickets" toLink={"/"} />
          <Button text="Location" toLink={"/"} />
        </div> */}
      </div>
      <div className={styles.when_image}>
        <Image src={imgNITC} alt="NITC" width={900} height={550} className={styles.img}/>
      </div>
    </div>
  )
}

export default whenFoss