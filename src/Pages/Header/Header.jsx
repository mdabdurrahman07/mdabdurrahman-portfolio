import { Link } from "react-router-dom";
import logo from '../../assets/png/pngwing.com.png'
import Nav from "./Nav";
const Header = () => {
   
    return (
      <div className="max-w-6xl mx-auto">
        <div className="sticky top-0 flex-wrap z-[20] mx-auto flex justify-between items-center py-5 px-2 border-b-2">
        <Link to="/"><button><img src={logo} alt="" className="w-9 animate-spin" /></button></Link>
        <Nav></Nav>
        </div>
      </div>
    );
};

export default Header;