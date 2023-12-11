/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
const PDF_FILE_URL = 'http://localhost:5173/RESUME_LOADING.pdf'
const Info = () => {
    const download_file = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    return (
        <div className='space-y-7'>
            <h1 className="text-5xl font-bold">Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-teal-500"
            style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >MD Abdur Rahman</span>
            </h1>
            <h1 className='text-4xl font-bold'>
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
            <h1 className='text-2xl font-medium '>
            I am developing digital symphonies with MERN magic. <br /> Newbie coder, boundlessly curious, and fueled by the<br /> quest for elegant solutions.
            </h1>

            {/* socail media  */}
            <div className='flex gap-6'>
            <Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">
            <FaLinkedin className="text-3xl text-sky-500"></FaLinkedin></Link>
             <Link to="https://github.com/mdabdurrahman07" target="_blank">
                <FaGithub className="text-3xl text-zinc-600"></FaGithub></Link>
             <Link to="https://www.instagram.com/jamil.official_07/" target="_blank">
                <FaInstagram className="text-3xl text-pink-500"></FaInstagram></Link>
             <Link to="https://www.facebook.com/mdabdurrahmannurjamil" target="_blank">
                <FaFacebook className="text-3xl text-blue-500"></FaFacebook></Link>
            </div>
            {/* resume download */}
            <div>
                <button onClick={()=> {download_file(PDF_FILE_URL)}}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500  px-4 py-2 flex justify-center items-center gap-3 
                shadow-lg shadow-indigo-500/50 rounded-xl font-semibold text-lg">
                    <span><GrDocumentDownload className="font-extrabold text-lg animate-bounce"></GrDocumentDownload></span>
                    <span>Resume</span>
                </button>
            </div>
        </div>
    );
};

export default Info;