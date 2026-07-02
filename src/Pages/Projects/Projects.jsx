import moment from '../../assets/webs/momentum.png'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCcStripe } from "react-icons/fa";
import { Link } from 'react-router-dom';
import quill from '../../assets/webs/quil.png'
import elegant from '../../assets/webs/elegant.png'
import unity from '../../assets/webs/unity-spark.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Helmet } from 'react-helmet-async';
AOS.init();
const Projects = () => {
    return (
        <div id="project" className="max-w-6xl mx-auto my-20 p-4">
              {/* <Helmet>
                <title>MD Abdur Rahman | Projects</title>
            </Helmet> */}
            <h1 className="text-5xl font-bold text-teal-500 text-center my-8">Projects</h1>
            {/* card */}
            <div className='space-y-4'>
            <div className="flex-row lg:flex justify-evenly items-center p-4 gap-10 shadow-lg shadow-blue-500/50 " data-aos="zoom-in-up">
                <div className='rounded-xl w-full lg:w-3/5'>
                  <img src={unity} alt="" />
                </div>
                <div className="divider lg:divider-horizontal"></div> 
                <div className='flex-1 space-y-6'>
               <h1 className='font-bold text-2xl text-center'>Unity Spark 👔</h1>
               <p className='text-center text-xl font-medium'>Unity Spark, HRM website with team collaboration. Key features include integrated video calling & chat feature, training management,task management, attendance tracking etc.</p>
               <div className='flex justify-center items-center gap-5'>
                <FaReact className='text-sky-500 text-xl'></FaReact>
                <FaNodeJs className='text-green-500 text-xl'></FaNodeJs>
                <SiExpress className='text-gray-500 text-xl'></SiExpress>
                <SiMongodb className='text-emerald-500 text-xl'></SiMongodb>
                <IoLogoFirebase className='text-orange-500 text-xl'></IoLogoFirebase>
                <FaCcStripe className='text-purple-500 text-xl'></FaCcStripe>
               </div>
               <div className='flex justify-center items-center gap-5'>
               <Link to="https://github.com/mursalinmirme/unity-spark/tree/Jamil">
               <span className='text-blue-500 underline font-medium'>github</span></Link>
               <Link to="https://unity-spark-22122.web.app/">
               <span className='text-blue-500 underline font-medium'>live link</span></Link>
               </div>
                </div>
            </div>
            <div className="flex-row lg:flex justify-evenly items-center p-4 gap-10 shadow-lg shadow-rose-500/50 " data-aos="zoom-in-up">
                <div className='rounded-xl w-full lg:w-3/5'>
                  <img src={moment} alt="" />
                </div>
                <div className="divider lg:divider-horizontal"></div> 
                <div className='flex-1 space-y-6'>
               <h1 className='font-bold text-2xl text-center'>Momentum Daily 📰</h1>
               <p className='text-center text-xl font-medium'>An online newspaper reading website, this website provides latest news, stripe payment system,  dynamic admin panel and article publishing, updating & deleting feature. </p>
               <div className='flex justify-center items-center gap-5'>
                <FaReact className='text-sky-500 text-xl'></FaReact>
                <FaNodeJs className='text-green-500 text-xl'></FaNodeJs>
                <SiExpress className='text-gray-500 text-xl'></SiExpress>
                <SiMongodb className='text-emerald-500 text-xl'></SiMongodb>
                <IoLogoFirebase className='text-orange-500 text-xl'></IoLogoFirebase>
                <FaCcStripe className='text-purple-500 text-xl'></FaCcStripe>
               </div>
               <div className='flex justify-center items-center gap-5'>
               <Link to="https://github.com/mdabdurrahman07/Momentum-Daily-Client">
               <span className='text-blue-500 underline font-medium'>github</span></Link>
               <Link to="https://momentum-daily.web.app/">
               <span className='text-blue-500 underline font-medium'>live link</span></Link>
               </div>
                </div>
            </div>
            <div className=" flex-row lg:flex justify-evenly items-center p-4 gap-10 shadow-lg shadow-cyan-500/50 " data-aos="zoom-in-up">
                <div className='rounded-xl w-full lg:w-3/5'>
                  <img src={quill} alt="" />
                </div>
                <div className="divider lg:divider-horizontal"></div> 
                <div className='flex-1 space-y-6'>
               <h1 className='font-bold text-2xl text-center'>Quill Quest 📗</h1>
               <p className='text-center text-xl font-medium'>An online book service website,  this website provides latest book related service,  admin panel and book publishing, updating & deleting feature. </p>
               <div className='flex justify-center items-center gap-5'>
                <FaReact className='text-sky-500 text-xl'></FaReact>
                <FaNodeJs className='text-green-500 text-xl'></FaNodeJs>
                <SiExpress className='text-gray-500 text-xl'></SiExpress>
                <SiMongodb className='text-emerald-500 text-xl'></SiMongodb>
                <IoLogoFirebase className='text-orange-500 text-xl'></IoLogoFirebase>
               </div>
               <div className='flex justify-center items-center gap-5'>
               <Link to="https://github.com/mdabdurrahman07/Quill-Quest-Client">
               <span className='text-blue-500 underline font-medium'>github</span></Link>
               <Link to="https://quillquest-92dfc.web.app/">
               <span className='text-blue-500 underline font-medium'>live link</span></Link>
               </div>
                </div>
            </div>
            <div className=" flex-row lg:flex justify-evenly items-center p-4 gap-10 shadow-lg shadow-purple-500/50 " data-aos="zoom-in-up">
                <div className='rounded-xl w-full lg:w-3/5'>
                  <img src={elegant} alt="" />
                </div>
                <div className="divider lg:divider-horizontal"></div> 
                <div className='flex-1 space-y-6'>
               <h1 className='font-bold text-2xl text-center'>Elegant Auto 🚗</h1>
               <p className='text-center text-xl font-medium'>An online  car booking website,  this website provides latest brands cars,  and car adding, updating & deleting feature. </p>
               <div className='flex justify-center items-center gap-5'>
                <FaReact className='text-sky-500 text-xl'></FaReact>
                <FaNodeJs className='text-green-500 text-xl'></FaNodeJs>
                <SiExpress className='text-gray-500 text-xl'></SiExpress>
                <SiMongodb className='text-emerald-500 text-xl'></SiMongodb>
                <IoLogoFirebase className='text-orange-500 text-xl'></IoLogoFirebase>
               </div>
               <div className='flex justify-center items-center gap-5'>
               <Link to="https://github.com/mdabdurrahman07/Elegant-Auto-Client">
               <span className='text-blue-500 underline font-medium'>github</span></Link>
               <Link to="https://elegant-auto.web.app/">
               <span className='text-blue-500 underline font-medium'>live link</span></Link>
               </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Projects;