import { useState } from "react";
import Button from "../components/Button";
import styles from "../styles/Faqs.module.css";
import Banner from "../components/Banner";
import Head from "next/head";
import Coming from "../components/LandingPage/Coming";

const questions = [
  {
    question: "How do I register for FOSSMeet'23?",
    answer:
      "Click on register button in the website to register. Participants will be required to fill up a form gathering basic information regarding the participant. The participants who have successfully completed payment will recieve a final confirmation email from us. The registration fee is ₹849 for students and ₹999 for professionals.",
  },
  {
    question: "When does the registration for FOSSMeet'23 close?",
    answer:
      "Registrations for FOSSMeet'23 will be open till 7th of February 11 PM.",
  },
  {
    question: "Will accommodation be provided?",
    answer:
      "Yes, different accomodation facilities are available for the students and professionals. Working professionals will have to pay an add-on fee of ₹250 for availing accommodation. Accommodation fee is covered for students in their registration fee.",
  },
  {
    question: "Is food provided during the event?",
    answer:
      "Yes, food will be provided. The registration fee is inclusive of dinner on Friday, breakfast, lunch and dinner on Saturday and, breakfast and lunch on Sunday.",
  },
  {
    question: "Are there any separate fees for talks/workshops?",
    answer: "No separate fee for talks/workshops.",
  },
  {
    question: "Can I register for specific workshops/talks?",
    answer:
      "No, there is no separate registration for specific talks/workshops. However, since workshops run in parallel, you may be asked to indicate your preferred workshop while reporting for the event. Admittance to workshops will be on this preference in first come first served order.",
  },
  {
    question: "Is it necessary for each participant to register?",
    answer:
      "Yes, each participant has to register seperately in the website. This it to keep track of your workshop/talk preference, food preference and hostel accommodation.",
  },
  {
    question: "Do we get T-shirts for FOSSMeet'23?",
    answer: "Yes, all participants of FOSSMeet'23 get free T-shirts! :)",
  },
  {
    question: "Do you provide participation certificates?",
    answer:
      "Yes, each participant shall receive a participation certificate on completion of the event. We request participants not to register for the event merely for the certificate. You might be denying the opportunity of a genuinely interested candidate :)",
  },
  {
    question: "How do I reach NIT Calicut?",
    answer:
      "NITC is well connected by railway, air and road facilities. All major stations in India have trains to Kozhikode Railway station (CLT). The Kozhikode International Airport (CCJ) provides daily flights to and from major cities in India. From Airport: Take a cab directly to NIT Calicut. From Railway Station: Take a cab directly to NIT Calicut or take a bus (towards Mukkam or REC/NIT) from Palayam bus stand, Kozhikode.",
  },
  // {
  //   question: "What is your refund policy?",
  //   answer:
  //     "Refund unless for genuine reasons will not be entertained. However, we will refund 50% of the amount paid, excluding service charges. To initiate a refund, send a mail to info@fossmeet.in and we will contact you.",
  // },
];

export default function faqs() {
  return (
    <div>
      <Banner title="Frequently Asked Questions" subtitle="Quick Support" />
      <div className="margin">
        <div className={styles["content-wrapper"]}>
          <HaveAnyQuestions />
          <div className={styles["questions-wrapper"]}>
            {questions.map((q, index) => (
              <Question key={index} question={q.question} answer={q.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HaveAnyQuestions() {
  return (
    <div className={styles["have-any-questions"]}>
      <h2>Have Any Questions?</h2>
      <p>
        Feel free to reach out to us and we will get back to you immediately
      </p>
      <Button text="Contact Us" toLink="contact" />
    </div>
  );
}

function Question({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles["question"]}>
      <div
        className={styles["question-heading-wrapper"]}
        onClick={() => setOpen((curr) => !curr)}
      >
        <h4>{question}</h4>
        <img
          className={`${styles["faq-drop-icon"]} ${
            open ? styles["up-down"] : ""
          }`}
          src="/images/assets/chevron-down.svg"
        />
      </div>
      {open && <p>{answer}</p>}
    </div>
  );
}
