import React from 'react'
import Image from 'next/image'
import styles from '../../styles/LandingPage/Who.module.css'
import student from '../../public/images/assets/img_student1.svg'
import teacher from '../../public/images/assets/img_teacher1.svg'
import coding from '../../public/images/assets/img_coders1.svg'
function whoseFoss() {
  return (
    <div className={styles.who_container}>
      <div className={styles.who_heading}>
        <p>
          Who is it for?
        </p>
      </div>
      <div className={styles.who_content}>
        <div className={styles.details}>
          {/* <div className={styles.details_heading}> */}
          <h2>
            Students
          </h2>
          {/* </div> */}
          {/* <div className={styles.details_image}> */}
          <div className={styles.img_container}>
            <Image src={student} alt="Student" className={styles.img}/>
          </div>
          {/* </div> */}
          {/* <div className={styles.para}> */}
          <p>
            <br />
            {/* <br /> */}
            If you are a humble newbie to the world of open source, then this is the most suitable platform to introduce you to the culture of
            code transparency.
          
            Additionally, it will prepare you with the skillset you need to get started in the field.
           {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;*/}
          </p>
          {/* </div> */}
        </div>
        <div className={styles.details}>
          <br/>
          <h2>
            Teachers
          </h2>
          <div className={styles.img_container}>
            <Image src={teacher} alt="teacher" className={styles.img} />
          </div>
          <p>
            {/* <br /> */}
            <br />
            As for educators, the FOSSMeet platform will provide a portal to interact with developers, academicians, and researchers. It will enable
            you to expand your network in your field of expertise. You will find opportunities to
            develop new tools and to pass along your knowledge to others who share your passion.
          </p>
        </div>
        <div className={styles.details}>
          <h2>
            Coding Enthusiasts
          </h2>
          <div className={styles.img_container}>
            <Image src={coding} alt="Coding Enthusiasts" className={styles.img}/>
          </div>
          <p>
            <br />
            If you are a coding enthusiast, you do not need to look any further to find people who share similar interests. Getting together with
            other developers at FOSSMeet is a great way to interact, brainstorm, and build new projects.
            <br />
            <br />
            
           {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;*/}
          </p>
        </div>
      </div>
    </div>
  )
}

export default whoseFoss
