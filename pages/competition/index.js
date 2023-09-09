import React from 'react'
import styles from '../../styles/competition/Competetition.module.css'
import Head from 'next/head'
import Coming from '../../components/LandingPage/Coming'
function index() {
    return (
        <div className={styles.competition}>
            
			<Head>
				<title>FOSS Meet 2022-23</title>
				<meta name='description' content='FOSS Meet 2022-23' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
            <Coming/>
{/* 
            <div className={styles.competition_heading}>
                <div className={styles.heading_css}>
                    <h4>
                        Competition
                    </h4>
                    <h1>
                        Capture the Flag
                    </h1>
                </div>
            </div>

            <div className={styles.competition_details}>

                <div className={styles.about}>
                    <div className={styles.about_section}>
                        <h1>
                            About
                        </h1>
                        <div className={styles.line}>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut efficitur risus, vel consequat tellus.
                            Suspendisse at neque ac mauris malesuada dignissim vel sed odio. Vestibulum sagittis ac tortor quis laoreet.
                            Pellentesque tincidunt arcu tortor, luctus viverra purus iaculis at.
                        </p>
                    </div>
                    <div className={styles.about_section}>
                        <h3>
                            Prerequisites
                        </h3>
                        <div className={styles.line2}>
                        </div>
                        <p>
                            1. Lorem ipsum dolor sit amet
                        </p>
                        <p>
                            2. Consectetur adipiscing elit.
                        </p>
                        <p>
                            3. Praesent ut efficitur risus, vel consequat tellus.
                        </p>
                    </div>
                    <div className={styles.about_section}>
                        <h3>
                            Event Guidelines
                        </h3>
                        <div className={styles.line3}>
                        </div>
                        <p>
                            1. Lorem ipsum dolor sit amet
                        </p>
                        <p>
                            2. Consectetur adipiscing elit.
                        </p>
                        <p>
                            3. Praesent ut efficitur risus, vel consequat tellus.
                        </p>
                    </div>
                </div>

                <div className={styles.eventinfo}>
                    <div className={styles.eventinfo_div}>
                        <div className={styles.eventinfo_div_section1}>
                            <h1>
                                Event Info
                            </h1>
                            <p>
                                <span className={styles.bolding}>
                                    Date:
                                </span>
                                12/03/2023, Sunday
                            </p>
                            <p>
                                <span className={styles.bolding}>
                                    Timings:
                                </span>
                                10:30 AM - 11:45 AM
                            </p>
                            <p>
                                <span className={styles.bolding}>
                                    Venue:
                                </span>
                                SSL Lab
                            </p>
                        </div>
                        <div className={styles.line4}></div>
                        <div className={styles.eventinfo_div_section2}>
                            <p>
                                <span className={styles.bolding}>
                                    1st Place:
                                </span>
                                2,000 Rs
                            </p>
                            <p>
                                <span className={styles.bolding}>
                                    2nd Place:
                                </span>
                                1,000 Rs
                            </p>
                            <p>
                                <span className={styles.bolding}>
                                    3rd Place:
                                </span>
                                500 Rs
                            </p>
                        </div>
                        <div className={styles.line4}></div>
                        <div className={styles.eventinfo_div_section3}>
                            <p>
                                To know more about this event, please contact
                            </p>
                            <br />
                            <p>
                                John Doe
                            </p>
                            <p>
                                john_does@gmail.com
                            </p>
                            <p>
                                +91 123456789
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default index