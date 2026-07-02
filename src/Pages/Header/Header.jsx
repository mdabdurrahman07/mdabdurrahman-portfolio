import { Link } from "react-router-dom";
import logo from "../../assets/logo/md_abdur_rahman_logo_white-bg-rm.png";
import Nav from "./Nav";
const Header = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="sticky top-0 flex-wrap z-[20] mx-auto flex justify-between items-center border-b-2 my-2">
        {/* <Link to="/"><button className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-500" 
        style={{
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}>Abdur</button></Link> */}
        <Link to="/">
          <img src={logo} alt="jamil-logo" className="w-20 h-20" />
        </Link>
        <Nav></Nav>
      </div>
    </div>
  );
};

export default Header;
