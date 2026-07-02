
import Banner from "../Components/Banner";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact"



const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;