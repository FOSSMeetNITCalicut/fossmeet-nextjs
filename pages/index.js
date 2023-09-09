import Head from 'next/head'
import HomePage from './home'

export default function Home() {
	return (
		<div>
			{/* <Head>
				<title>FOSS Meet 2022-23</title>
				<meta name='description' content='FOSSMeet is an annual gathering to celebrate the freedom in 
				FOSS featuring exciting events, workshops, and brilliant speakers.' />
				<link rel="ico"  href="/favicon.ico" />
			</Head> */}
			<HomePage/>
		</div>
	)
}
