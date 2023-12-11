import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Projects from "./Projects/Projects";
import About from "./About/About";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MD Abdur Rahman | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
        </div>
    );
};

export default Home;