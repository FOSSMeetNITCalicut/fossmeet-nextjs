import styles from "../../styles/LandingPage/PrevSpeakers.module.css";
import imgBradley from "../../public/images/prevSpeakers/Bradley.jpg";
import imgSasikumar from "../../public/images/prevSpeakers/sasikumar.png";
import imagAmol from "../../public/images/prevSpeakers/Amol Kahat.jpg";
import imgMarco from "../../public/images/prevSpeakers/marco.jpg";
// import img1 from '../../public/images/dropdown-arrow2-512-1@2x.png'
import Image from "next/image";

function prevSpeakers() {
  const data = [
    {
      name: "Bradley M Kuhn",
      description: "Free software Activist",
      img: imgBradley,
    },
    {
      name: "Dr. Sasi Kumar",
      description: "Director, FSF India",
      img: imgSasikumar,
    },
    {
      name: "Amol Kahat",
      description: "Red Hatter, Open source enthusiast",
      img: imagAmol,
    },
    {
      name: "Marco Fioretti",
      description: "Author and Researcher",
      img: imgMarco,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Once upon a time in FOSSMeet...</p>
        <h1>Some Previous Speakers</h1>
      </div>

      <div className={styles.cards_container}>
        {data &&
          data.map((prevSpeaker) => {
            return (
              <div key={prevSpeaker.name} className={styles.card}>
                <div className={styles.author}>
                  <div className={styles.image_container}>
                    <Image
                      src={prevSpeaker.img}
                      alt={`Photo of ${prevSpeaker.name}`}
                      width="300"
                      height="320"
                      className={styles.Image}
                    />
                  </div>
                  <div className={styles.details}>
                    <h3>{prevSpeaker.name}</h3>
                    <p>{prevSpeaker.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default prevSpeakers;
