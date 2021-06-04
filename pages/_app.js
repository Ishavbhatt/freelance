import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
// import ProgressBar from "@badrap/bar-of-progress";
// import Router from "next/router";
import "../styles/custom.css"

import Layout from '../components/Layout'

// const progress = new ProgressBar({
//   size: 3,
//   color: "#55e5eb",
//   className: "bar-of-progress",
//   delay: 100,
// });
// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
