// import styles from "../../styles/event-details/EventDetails.module.css";
// import Description from "../../components/event-details/Description";
// import Info from "../../components/event-details/Info";
// import Banner from "../../components/Banner";
// import events from "/public/events.json";
// import Link from "next/link";
import Error from "../404";

// const Event = (event) => {
//   return (
//     <div>
//       {/* <Coming /> */}
//       {/* bannner */}
//       <Banner title="Event Details" subtitle="More about" />
//       <div className={styles["event-navigation"]}>
//         {event.id > 0 ? (
//           <Link href={`/events/${event.id - 1}`}>
//             <div className={styles["nav-button"]}>
//               <img
//                 className={styles.left}
//                 src="/images/assets/chevron-down.svg"
//               />
//               {/* <p>Previous event</p> */}
//             </div>
//           </Link>
//         ) : (
//           ""
//         )}
//         <div className={styles["nav-button"]}>
//           <Link href="/schedule">Back to schedule</Link>
//         </div>
//         {event.id < events.length - 1 ? (
//           <Link href={`/events/${event.id + 1}`}>
//             {/* <p>Next event</p> */}
//             <div className={styles["nav-button"]}>
//               {" "}
//               <img
//                 className={styles.right}
//                 src="/images/assets/chevron-down.svg"
//               />
//             </div>
//           </Link>
//         ) : (
//           ""
//         )}
//       </div>
//       <div className={`${styles["event-details-container"]} margin`}>
//         <h3 className={styles.title}>{event.title}</h3>
//         {/* workshop description */}
//         <div className={styles["event-details"]}>
//           <Description
//             title={event.title}
//             about={event.about}
//             topics={event.topics}
//             learn={event.learn}
//             prereqs={event.prereqs}
//           />

//           {/* workshop info */}
//           <Info
//             date={event.date}
//             startTime={event["start_time"]}
//             endTime={event["end_time"]}
//             venue={event.venue}
//             // cby={}
//             speaker={event.by}
//             speakerNames={event.speakers}
//             speakerImages={event.images}
//             // contact={event.contact}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const paths = events.map((event) => ({
//     params: { id: event.id.toString() },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps(params) {
//   const currentEvent = events.filter(
//     (e) => e.id.toString() === params.params.id
//   );
//   return {
//     props: currentEvent[0],
//   };
// }

const Event = ()=> {
  return(
    <Error />
  )
}

export default Event;
