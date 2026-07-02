import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
// import { Helmet } from "react-helmet-async";

const Main = () => {
    return (
        <div>
             {/* <Helmet>
      <title>MD Abdur Rahman | HOME</title>
          </Helmet> */}
            <Header></Header>
          <div className="min-h-[78vh]">
          <Outlet/> 
          </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;