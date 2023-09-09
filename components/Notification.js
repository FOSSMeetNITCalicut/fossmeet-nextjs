import { useEffect } from "react";
import styles from "../styles/Notification.module.css"

export default function Notification(props){

    function show() {
        let notif = document.getElementById("notif");
        setTimeout(() => notif.classList.add(styles.show), 500);
        setTimeout(() => notif.classList.remove(styles.show), 5000);
    }

    useEffect(() => show(), [])

    return(
        <div className={styles.container} id="notif">
            <div className={styles.notification}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}