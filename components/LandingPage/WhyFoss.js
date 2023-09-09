import React from 'react'
import styles from '../../styles/LandingPage/Why.module.css'
import img1 from '/public/images/assets/linus.png'
import img2 from '/public/images/assets/rms.png'
import Image from 'next/image'

function WhyFoss() {
  return (
    <div className={styles['why-container']}>
      <div className={styles.linus}>
        <Image src={img1} width={320} height={520}></Image>
      </div>
      <div className={styles.why}>
        <div className={styles.heading_why}>
          <h1>
            Why are we conducting it?
          </h1>
          <p>
            We believe in collaboration for the growth of technology and society.
          </p>
        </div>
        <div className={styles.why_quotes}>
          <div className={styles.why_quotes1}>
            <p>
              &quot; When a project is opened up, there is rapid and continual improvement. With
              teams of contributors working in parallel, the results can happen far more speedily
              and successfully than if the work were being conducted behind closed doors &quot;
            </p>
            <h4>
              -Linus Torvalds, creator of Linux and Git
            </h4>
          </div >
          <div className={styles.why_quotes2}>
            <p>
              Creativity can be a social contribution, but only in so far as society
               is free to use the results.
            </p>
            <h4>
               -Richard Stallman, founder of the Free Software Movement
            </h4>
          </div>
        </div>
        {/* <Image src={image1} class={styles.img} alt="Images" width="3000"/> */}
      </div>
      <div className={styles.rms}>
        <Image src={img2} width={320} height={520}></Image>
      </div>
    </div>
  )
}

export default WhyFoss