import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Projects from "./Projects/Projects";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MD Abdur Rahman | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;