/* eslint-disable react/no-unescaped-entities */
import { MdMarkEmailRead } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import jamil from "../../assets/pp/md_abdur_rahman.jpg"
import { Typewriter } from "react-simple-typewriter";
const About = () => {
    return (
        <>
        <div  className="max-w-6xl mx-auto my-20 p-4">
        <h1 className="text-5xl font-bold text-teal-500 text-center my-8">About</h1>
        <div className="flex-row lg:flex justify-between items-center gap-10 p-4">
        <div>
       <img src={jamil} alt="" className="max-w-xs md:max-w-md rounded-xl mx-auto mb-3" />
        </div>
        <div className="space-y-6">
        <h1 className="text-4xl font-bold">Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-teal-500"
            style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >MD Abdur Rahman</span>
            </h1>
            <h1 className='text-3xl font-bold'>
            <Typewriter
            words={['MERN Stack Developer', 'Web Developer' , 'React Developer']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={2000}
          
          />
            </h1>
            <h1 className='text-xl font-medium '>
            I am developing digital symphonies with MERN magic. <br /> Newbie coder, boundlessly curious, and fueled by the<br /> quest for elegant solutions.
            </h1>
            <div>
                <span className="flex  gap-4 items-center font-medium text-xl"><MdMarkEmailRead></MdMarkEmailRead> mdabdurrahmannurjamil@gmail.com</span>
                <span  className="flex  gap-4 items-center font-medium text-xl"><MdCall></MdCall> +8801780714195</span>
                <span  className="flex gap-4 items-center font-medium text-xl"><FaMap></FaMap> Dhaka, Bangladesh</span>
            </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default About;