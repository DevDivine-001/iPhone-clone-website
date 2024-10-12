import Footer from "./components/common/Footer"
import Navbar from "./components/common/Navbar"
import Features from "./Pages/Features"
import Hero from "./Pages/Hero"
import Highlights from "./Pages/Highlights"
import HowItWorks from "./Pages/HowItWorks"
import Model from "./Pages/Model"


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  )
}

export default App