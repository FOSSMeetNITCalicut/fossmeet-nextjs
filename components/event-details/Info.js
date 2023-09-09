import styles from "../../styles/event-details/Info.module.css"
import Image from "next/image";
function Info(props){
    let day = props.date==='2023-02-10'?'01':props.date === '2023-02-11'?'02':'03';
    return (
        <div className={styles['info-container']}>
            <h2 className={styles['info-heading']}>Event Info</h2>
            <div className={styles.info}>Day {day}</div>
            <div className={styles.info}>Time: {props.startTime} - {props.endTime}</div>
            <div className={styles.info}>Venue: {props.venue}</div>
            {props.speakerNames && <div className={styles.info}>By:</div>}
            <div className={styles.speakers}>
                {/* {console.log(props.speakers)} */}
                {props.speakerImages && props.speakerImages.map((speaker, k) => {
                    return(
                        <div key={k} className={styles['speaker-container']}>
                            <Image
                                src={speaker}
                                alt="speaker"
                                width={80}
                                height={80}
                                className={styles.img}
                                />
                            <p className={styles.name}>{props.speakerNames[k]}</p>
                        </div>
                    )
                })}
            </div>
            {/* {props.contact && <div>
                <hr />
                <div className={styles.contact}>To know more about this event, please contact <br /> {props.contact} </div>
            </div>} */}
        </div>
    )
}

Info.defaultProps = {
    date: "25 December",
    timing: "3 Am IST",
    venue: "SSL",
    // speakerNames: ["Akshay", "Deepika"],
    // speakerImages:["/images/speakers/asd.jpg","/images/speakers/Deepika.jpg"],
    // contact: "John Doe: johndoe@doemail.doe"
}

export default Info;