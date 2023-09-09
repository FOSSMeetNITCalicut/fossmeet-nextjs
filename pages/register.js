import React from 'react'
import Notification from '../components/Notification'
import styles from '../styles/Register.module.css'

function register() {

  function preventRedirection(){
    window.addEventListener('beforeunload', (event) => {
      // event.preventDefault()
      alert('redirecting')
      window.location.replace("http://fossmeet.net")
    })
  }

  return (
    <div className={styles.container}>
      <h1>Registrations closed</h1>
      {/* <Notification message={"Registrations closed"} /> */}
      {/* <Coming/> */}
      {/* <iframe onLoad={preventRedirection} className={styles.iframe} id="ts-iframe" src="https://www.townscript.com/v2/widget/FOSSMeet23/booking"></iframe> <link rel="stylesheet" href = "https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" /> */}
      {/* <script id='script'>
        {preventRedirection()}
      </script> */}
    </div>
  )
}

export default register
