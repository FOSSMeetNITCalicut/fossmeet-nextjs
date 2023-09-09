import React from 'react'
import Head from 'next/head'

import Button from '../Button'
import styles from '../../styles/Coming_soon.module.css'
import { useRouter } from 'next/router'
function Coming() {
    let router = useRouter();
    return (
        <div className="error">

            <div className={styles.coming_soon_showcase}>
                <div className={styles.centered_div}>
                    <h1>Coming Soon.....</h1>
                    <br />
                    <br />
                    <p>We are working hard to get this page up. So, please stick around. </p>
                    {/* <p>To get notified when this page is up, please enter your email below</p> */}
                </div>

                {/* <form className={styles.contact_form}>
                    <input type="text" placeholder="Enter email here" />
                    <div className={styles.button_div}>
                        <Button text={"Notify Me"} toLink={"/notify"} />
                    </div>
                </form> */}
            </div>
        </div>
    )
}

export default Coming
