import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logos from '../../assets/png/logo-no-background-2.png'
import Swal from 'sweetalert2'
/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_frp4d7f', 'template_pxccjgf', form.current, 'd5CZgv_tbGhgGcMc8')
      .then((result) => {
          console.log(result.text);
          if(result.text){
            e.target.rest()
            Swal.fire({
                title: "Well Done",
                text: "Thanks for your message !",
                icon: "success"
              });
          }
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="max-w-6xl mx-auto my-20 p-4">
         <h1 className="text-5xl font-bold text-teal-500 text-center my-12">Get in Touch</h1> 
         <div className="flex-row lg:flex justify-between items-center gap-5 lg:gap-10">
            <div className="flex-1 space-y-5">
                <img src={logos} alt="" />
            <h1 className="text-xl font-semibold text-left">Have a question, comment, or just want to say hello? I'd love to hear from you! Please use the contact form  to reach out, and I'll get back to you as soon as possible.</h1>
            
            <div className='flex gap-6 '>
            <Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">
            <FaLinkedin className="text-3xl text-sky-500"></FaLinkedin></Link>
             <Link to="https://github.com/mdabdurrahman07" target="_blank">
                <FaGithub className="text-3xl text-zinc-600"></FaGithub></Link>
             <Link to="https://www.instagram.com/jamil.official_07/" target="_blank">
                <FaInstagram className="text-3xl text-pink-500"></FaInstagram></Link>
             <Link to="https://www.facebook.com/mdabdurrahmannurjamil" target="_blank">
                <FaFacebook className="text-3xl text-blue-500"></FaFacebook></Link>
            </div>
 
            </div>
            <div className="flex-1 mt-5 md:mt-0">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
            
            <input className="bg-[#fff] border border-[#33353F] placeholder-[#9CA2A9] text-slate-800 text-sm rounded-lg block w-full p-2.5" type="text" name="user_name" placeholder="Your Name"/>
           
            <input className="bg-[#fff] border border-[#33353F] placeholder-[#9CA2A9] text-slate-800 text-sm rounded-lg block w-full p-2.5" type="email" name="user_email" placeholder="Your Email" />
            
            <textarea className="bg-[#fff] border border-[#33353F] placeholder-[#9CA2A9] text-slate-80 text-sm rounded-lg block w-full p-2.5" rows={3} name="message" placeholder="Your Message"/>
            <input className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 to-blue-500 text-white" type="submit" value="Send" />
    </form>
            </div>
         </div>
        </div>
    );
};

export default Contact;