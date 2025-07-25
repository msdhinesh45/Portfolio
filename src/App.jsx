import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureSections from "./sections/FeatureSections";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowCases from "./sections/ShowCases";
import TechStack from "./sections/TechStack";
import Testimonal from "./sections/Testimonial";

const App = () => {
  return (
    <>
    <Navbar/>
        <Hero />
        <ShowCases />
        <LogoSection />
        <FeatureSections />
        <Experience />
        <TechStack/>
        <Testimonal/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App;