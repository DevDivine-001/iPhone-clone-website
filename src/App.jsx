import Footer from "./components/common/Footer"
import Navbar from "./components/common/Navbar"
import Features from "./Pages/Features"
import Hero from "./Pages/Hero"
import Highlights from "./Pages/Highlights"
import HowItWorks from "./Pages/HowItWorks"
import Model from "./Pages/Model"

// import * as Sentry from "@sentry/react"


// const App = () => {
//   return <button onClick={() => methodDoesNotExist()}>Break the world</button>;

//   return (
//     <main className="bg-black">
//       <Navbar />
//       <Hero />
//       <Highlights />
//       <Model />
//       <Features />
//       <HowItWorks />
//       <Footer />
//     </main>
//   )
// }

// export default Sentry.withProfiler(App)


// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Highlights from './components/Highlights';
// import Model from './components/Model';
// import Features from './components/Features';
// import HowItWorks from './components/HowItWorks';
// import Footer from './components/Footer';

// import * as Sentry from '@sentry/react';

// const App = () => {
//   return <>

//     <button onClick={() => methodDoesNotExist()}>Break the world</button>;
//   </>

//   //   return (
//   //     <main className="bg-black">
//   //       <Navbar />
//   //       <Hero />
//   //       <Highlights />
//   //       <Model />
//   //       <Features />
//   //       <HowItWorks />
//   //       <Footer />
//   //     </main>
//   //   )
// }

// export default
//   Sentry.withProfiler(App);


import React from 'react'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App