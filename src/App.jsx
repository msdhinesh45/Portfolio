import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowCases from "./sections/ShowCases";

const App = () => {
  return (
    <>
    <Navbar/>
        <Hero />
        <ShowCases />
        <LogoSection />
    </>
  )
}

export default App;