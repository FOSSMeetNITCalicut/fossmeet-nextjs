import styles from "../styles/Banner.module.css";

Banner.defaultProps = {
  subtitle: "",
  title: "",
  button: false,
  buttonText: "",
  buttonOnClick: false,
  filename: "",
};

export default function Banner(props) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles["subtitle"]}>{props.subtitle}</div>
        <div className={styles["title"]}>{props.title}</div>
      </div>
      {props.button && (
        <div className={styles["button-container"]}>
          <a className={styles["button"]} href={`${props.filename}`} download>
            <props.button size="30" className={styles["button-icon"]} />
          </a>
          <p>{props.buttonText}</p>
        </div>
      )}
    </div>
  );
}
