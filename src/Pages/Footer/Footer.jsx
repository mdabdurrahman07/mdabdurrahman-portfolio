import { useEffect, useState } from "react";


const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentYear(new Date().getFullYear());
        }, 60000); 
    
        return () => clearInterval(intervalId); 
      }, []);
    return (
        <div className="max-w-6xl mx-auto">
                <footer className="footer footer-center p-4 bg-black text-base-content">
        <aside>
            <p className="text-lg font-medium">Copyright © {currentYear} - All right reserved by MD Abdur Rahman</p>
        </aside>
        </footer> 
        </div>
    );
};

export default Footer;