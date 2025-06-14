import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import FeatureSections from "./sections/FeatureSections";
import Hero from "./sections/Hero";
import ShowCases from "./sections/ShowCases";

const App = () => {
  return (
    <>
    <Navbar/>
        <Hero />
        <ShowCases />
        <LogoSection />
        <FeatureSections />
        <Experience />
    </>
  )
}

export default App;