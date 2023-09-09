import styles from "../../styles/event-details/Description.module.css";

Description.defaultProps = {
  about: "This event is being worked upon. We will be updating the page once everything is ready to go. Thanks for your patience!",
  // prereqs: ["Nothing", "Much", "For Real"],
};

export default function Description(props) {
  return (
    <div className={styles.container}>

      <div className={styles.aboutContainer}>
        <div className={styles.heading}>
          <h3>About</h3>
        </div>
        <p className={styles.about}>{props.about}</p>
      </div>

      {props.topics? <div>
        <div className={styles.topics}>
          {/* map learnings */}
          <ul>
            {props.topics.map((t, i) => (
              <li key={i}>
                {i+1}. {t}
              </li>
            ))}
          </ul>
        </div>
      </div>: ""}

      {props.learn? <div className={styles.learnContainer}>
        <div className={styles.heading}>
          <h3>What you will learn</h3>
        </div>
        <div className={styles.learn}>
          {/* map learnings */}
          <ul>
            {props.learn.map((l, i) => (
              <li key={i}>
                {i+1}. {l}
              </li>
            ))}
          </ul>
        </div>
      </div>: ""}

      {props.prereqs? <div className={styles.prereqContainer}>
        <div className={styles.heading}>
          <h3>Prerequisites</h3>
        </div>
        <div className={styles.prereqs}>
          {/* map prereqs */}
          <ol>
            {props.prereqs.map((pr, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: pr }}>
              </li>
            ))}
          </ol>
        </div>
      </div>: ""}
    </div>
  );
}
