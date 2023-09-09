import styles from "../styles/Media.module.css";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Banner from "../components/Banner";
import Head from 'next/head'
import { useState } from "react";

let images = [
  'fm1.webp',
  'fm3.webp',
  'fm5.webp',
  'fm6.webp',
  'fm15.webp',
  'fm12.webp',
  'fm7.webp',
  'fm17.webp',
  'fm9.webp',
  'fm10.webp',
  'fm18.webp',
  'fm8.webp',
  'fm13.webp',
  'fm11.webp',
  'fm4.webp',
  'fm16.webp',
  'fm14.webp',
]

const Media = () => {
  // let router = useRouter();
  let [img,setImage] = useState('')
  return (
    <div>

      <Head>
				<title>FOSSMeet&apos;23</title>
				<meta name='description' content='FOSS Meet 2022-23' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <Banner title="Gallery" subtitle="FOSSMeet in Pictures" image="" />

      <div className={`${styles.media_body} margin`}>
        <div className={styles.media_gallery}>
          {images.map((image,i) => {
              return(
                <div onClick={() => setImage(image)} key={i}>
                  <Card img_name={image} />
                </div>) 
          })}
        </div>
      </div>

      { img!='' && 
      <div className={styles['modal-container']}>
        <div onClick={() => setImage('')} onScroll={() => setImage('')}>
          <Modal img_name={img} />
        </div>
      </div>}
    </div>
  );
};

export default Media;

// Ideas: If I cannot use an image modal, we create separate page for image, and add CSS to it.
// https://www.youtube.com/watch?v=P4W_LaotmNI
