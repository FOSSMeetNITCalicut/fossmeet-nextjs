import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import styles from "../styles/Layout.module.css";
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>

      <Head>
        <title>FOSSMeet&apos;24</title>
        <meta name='description' content='FOSSMeet is an annual gathering to celebrate the 
        freedom in FOSS featuring exciting events,
        workshops, and brilliant speakers.' />
        {/* <link rel="icon" href={icon} />  */}

      </Head>
      <Navbar />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
}
