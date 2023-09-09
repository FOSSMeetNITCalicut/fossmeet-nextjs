// import styles from "../styles/CodeOfConduct.module.css";
import Banner from "../components/Banner";
import Head from 'next/head'
import styles from '../styles/CodeOfConduct.module.css'
export default function CodeOfConduct() {
  const CodeOfConduct =
    "FOSSMeet is a community conference intended for networking and collaboration in the developer community. We value your and everyone else's participation in the conference. Accordingly, We want all attendees to be safe from harm and have an enjoyable experience. For this reason, every participant is required to follow minimum conducts described below. \n\nFOSSMeet is dedicated to providing a harassment-free conference experience for everyone, regardless of\n\n1. Gender\n2. Sexual Orientation\n3. Disability\n4. Physical Appearance\n5. Body size\n6. Race\n7. Religion\n\nWe do not tolerate harassment of conference participants in any form. All communication should be appropriate for a professional audience including people of many different backgrounds. Harassment also includes:\n\n1. Sexual images in public spaces\n2. Deliberate intimidation\n3. Stalking or following\n4. Harassing photography or recording\n5. Sustained disruption of talks or other events\n6. Inappropriate physical contact\n7. and Unwelcome sexual attention. \n\nExhibitors in the expo hall, sponsor or vendor booths, or similar activities are also subject to the anti-harassment policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.\n\nBe careful in the words that you choose. Remember that sexist, racist, and other exclusionary jokes can be offensive to those around you. Excessive swearing and offensive jokes are not appropriate for conference talks like FOSSMeet.";
  const license =
    "LICENCE | This Code of Conduct was forked from the example policy from the Geek Feminism wiki, created by the Ada Initiative and other volunteers, which is under a Creative Commons Zero license.";
  return (
    
    <div>
      {/* <div className="error">

      </div> */}
      <Banner
        image="code-of-conduct.jpeg"
        title="Code of Conduct"
        subtitle="Our Ethics and Values"
      />
      <div className={styles.container}>
        {CodeOfConduct.split("\n\n").map((coc) => {
          return (
            <>
              {coc.split("\n").map((c) => {
                return <p key={c}>{c}</p>;
              })}
              <br></br>
            </>
          );
        })}
        <b>
          <i>
            If a participant engages in behavior that violates this code of
            conduct, the conference organizers may take any action they deem
            appropriate, including warning the offender or expulsion from the
            conference with no refund.
          </i>
        </b>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <p>{license}</p>
      </div>
    </div>
  );
}
