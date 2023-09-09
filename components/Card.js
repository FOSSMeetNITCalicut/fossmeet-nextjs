import styles from "../styles/Media.module.css";

const Card = ({ img_name, alt }) => {
  let location = "/gallery_images/".concat(img_name);
  return (
    <div>
      <div className={styles.image_container}>
        <img src={location} alt={alt} className={styles.image_card} />
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  alt: "FOSSMeet picture",
};
