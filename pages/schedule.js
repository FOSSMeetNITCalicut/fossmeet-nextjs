import React from "react";
// import styles from "../styles/Schedule.module.css";
// import Banner from "../components/Banner";
import Error from "../pages/404"

// import Link from "next/link";
// import events from "../public/events.json";
// import { FiDownload } from "react-icons/fi";

// const Schedule = () => {
//   const convertDateToDay = (eventDate) => {
//     switch (eventDate) {
//       case "2023-02-10":
//         return 1;
//       case "2023-02-11":
//         return 2;
//       case "2023-02-12":
//         return 3;
//       default:
//         return 0;
//     }
//   };

//   const [day, setDay] = useState(1);
//   const [eventsSorted, setEventsSorted] = useState([]);

//   useEffect(() => {
//     const startTimeMap = new Map();
//     events.forEach((event) => {
//       if (day == convertDateToDay(event.date)) {
//         if (startTimeMap.has(event.start_time)) {
//           startTimeMap.get(event.start_time).push(event);
//         } else {
//           startTimeMap.set(event.start_time, [event]);
//         }
//       }
//     });
//     setEventsSorted(
//       Array.from(startTimeMap).reduce((acc, [start_time, events]) => {
//         acc.push({ start_time, events });
//         return acc;
//       }, [])
//     );
//   }, [day]);

//   return (
//     <div className={styles.container}>
//       <Banner
//         image="scedule.png"
//         title="Schedule"
//         subtitle="Lectures, workshops and more..."
//         button={FiDownload}
//         buttonText="Download schedule here"
//         filename="FOSSMeet'23 Schedule.pdf"
//       />
//       <div className="margin">
//         <div className={styles["tabs"]}>
//           {/* [3, 2, 1] and row-reverse instead of [1, 2, 3] becuase checked={day == dayIterator} was not working properly. Replace this with a better method if possible. */}
//           {[3, 2, 1].map((dayIterator) => {
//             return (
//               <>
//                 <input
//                   type="radio"
//                   className={styles["tabs__radio"]}
//                   name="tabs-day"
//                   value={dayIterator}
//                   id={`tab${dayIterator}`}
//                   onChange={(e) => {
//                     setDay(e.target.value);
//                   }}
//                   checked={day == dayIterator}
//                 ></input>
//                 <label
//                   htmlFor={`tab${dayIterator}`}
//                   className={styles["tabs__label"]}
//                 >
//                   Day {dayIterator}
//                 </label>
//               </>
//             );
//           })}
//         </div>
//         {eventsSorted &&
//           eventsSorted.map((eventsSameStartTime, i) => {
//             return (
//               <div
//                 key={eventsSameStartTime.start_time}
//                 className={styles["events"]}
//               >
//                 <div
//                   className={
//                     styles[
//                       eventsSorted.length - 1 === i ? "time" : "time-border"
//                     ]
//                   }
//                 >
//                   <h4>{eventsSameStartTime.start_time}</h4>
//                 </div>
//                 <div>
//                   {eventsSameStartTime.events.map((event, i) => {
//                     return (
//                       <Link href={`/events/${event.id}`} key={i}>
//                         <div className={styles["event"]}>
//                           <p>{event.title}</p>
//                           {event.by && (
//                             <p className={styles["speaker"]}>
//                               - {event.by}
//                             </p>
//                           )}
//                         </div>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

const Schedule = () => {
  return(
    <Error />
  )
}

export default Schedule;
