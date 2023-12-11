import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MD Abdur Rahman | HOME</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;