import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Services from './Services'
import Testimonial from '../components/Testimonial'



export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Company</title>
        {/* <meta name="description" content="Find the best trekking packages and tour packages in himachal pradesh." /> */}
        <meta name="robots" content="index, follow, noodp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        {/* <link rel="icon" href="/devbhumi-logo.png" /> */}
      </Head>
      <Hero />
      <Services />
      <Testimonial />
    </div>
  )
}
