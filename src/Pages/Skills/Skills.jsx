import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {
    return (
        <div className="max-w-6xl mx-auto my-20 p-4">
            <h1 className="text-5xl font-bold text-teal-500 text-center my-8">My Skills</h1> 

          
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5">
          
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":81}} role="progressbar">81%</div>
          <span className="font-bold text-xl flex items-center my-2"><FaHtml5 className="text-3xl"></FaHtml5>HTML</span>
          </div>
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":79}} role="progressbar">79%</div>
          <span className="font-bold text-xl flex items-center my-2"><FaCss3 className="text-3xl"></FaCss3>CSS3</span>
          </div>
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":78}} role="progressbar">78%</div>
          <span className="font-bold text-xl flex items-center my-2"><SiJavascript className="text-3xl"></SiJavascript>Javascript</span>
          </div>
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":78}} role="progressbar">79%</div>
          <span className="font-bold text-xl flex items-center my-2"><SiTailwindcss className="text-3xl"></SiTailwindcss>Tailwind</span>
          </div>
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":78}} role="progressbar">75%</div>
          <span className="font-bold text-xl flex items-center my-2"><FaReact className="text-3xl"></FaReact>React</span>
          </div>
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":78}} role="progressbar">75%</div>
          <span className="font-bold text-xl flex items-center my-2"><SiMongodb className="text-3xl"></SiMongodb>MongoDB</span>
          </div>
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":78}} role="progressbar">65%</div>
          <span className="font-bold text-xl flex items-center my-2"><SiExpress className="text-3xl"></SiExpress>Express</span>
          </div>
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":78}} role="progressbar">68%</div>
          <span className="font-bold text-xl flex items-center my-2"><FaNodeJs className="text-3xl"></FaNodeJs>NodeJs</span>
          </div>
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":78}} role="progressbar">72%</div>
          <span className="font-bold text-xl flex items-center my-2"><FaBootstrap className="text-3xl"></FaBootstrap>Firebase</span>
          </div>
          <div className="flex-row  mx-auto">
          <div className="radial-progress" style={{"--value":78}} role="progressbar">76%</div>
          <span className="font-bold text-xl flex items-center my-2"><IoLogoFirebase className="text-3xl"></IoLogoFirebase>Bootstrap</span>
          </div>
         
      
          </div>
           </div>
        
    );
};

export default Skills;

