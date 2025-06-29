import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import FeatureSections from "./sections/FeatureSections";
import Hero from "./sections/Hero";
import ShowCases from "./sections/ShowCases";
import TechStack from "./sections/TechStack";
import Testimonal from "./sections/Testimonal";

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
    </>
  )
}

export default App;