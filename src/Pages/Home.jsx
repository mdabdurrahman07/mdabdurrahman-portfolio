import Banner from "../Components/Banner";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
