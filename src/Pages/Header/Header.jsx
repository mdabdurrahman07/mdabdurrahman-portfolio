import { Link } from "react-router-dom";
// import logo from '../../assets/png/pngwing.com.png'
import Nav from "./Nav";
const Header = () => {
   
    return (
      <div className="max-w-6xl mx-auto">
        <div className="sticky top-0 flex-wrap z-[20] mx-auto flex justify-between items-center py-5 px-2 border-b-2">
        <Link to="/"><button className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-500" 
        style={{
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}>Abdur</button></Link>
        <Nav></Nav>
        </div>
      </div>
    );
};

export default Header;