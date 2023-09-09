import styles from "../styles/Media.module.css";

const Modal = ({img_name}) => {
  let location = "/gallery_images/".concat(img_name);
  return (
    <div>
        <div className = {styles.modal_container}>
            <img src={location} className = {styles.modal_image}/>
            <p style={{textAlign:"center"}}>Click Anywhere to Exit</p>
        </div>
    </div>
  )
}

export default Modal