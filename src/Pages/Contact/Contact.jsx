import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_frp4d7f",
        "template_pxccjgf",
        form.current,
        "d5CZgv_tbGhgGcMc8",
      )
      .then(
        (result) => {
          console.log(result.text);
          // Fixed typo: .reset() instead of .rest()
          e.target.reset(); 
          Swal.fire({
            title: "Well Done",
            text: "Thanks for your message!",
            icon: "success",
            confirmButtonColor: "#06b6d4",
          });
        },
        (error) => {
          console.error(error.text);
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            icon: "error",
          });
        },
      );
  };

  return (
    <div className="max-w-6xl mx-auto my-20 px-6 lg:px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        Get In Touch
      </h1>
      
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
        {/* Left Side: Info & Socials */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            MD Abdur Rahman
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Have a question, comment, or just want to say hello? I'd love to
            hear from you! Please use the contact form to reach out, and I'll
            get back to you as soon as possible.
          </p>

          <div className="flex gap-5 pt-4">
            <Link
              className="hover:-translate-y-1.5 transition-transform p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl text-sky-400" />
            </Link>
            <Link
              className="hover:-translate-y-1.5 transition-transform p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              to="https://github.com/mdabdurrahman07"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl text-gray-200" />
            </Link>
            <Link
              className="hover:-translate-y-1.5 transition-transform p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              to="https://www.instagram.com/jamil.official_07/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl text-pink-400" />
            </Link>
            <Link
              className="hover:-translate-y-1.5 transition-transform p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              to="https://www.facebook.com/mdabdurrahmannurjamil"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl text-blue-400" />
            </Link>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 w-full bg-gray-900/50 border border-gray-800 p-8 rounded-2xl shadow-xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                className="bg-gray-800 border border-gray-700 placeholder-gray-500 text-white text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                className="bg-gray-800 border border-gray-700 placeholder-gray-500 text-white text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                type="email"
                name="user_email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                className="bg-gray-800 border border-gray-700 placeholder-gray-500 text-white text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                rows={4}
                name="message"
                placeholder="Leave a message..."
                required
              />
            </div>

            <button
              className="cursor-pointer px-6 py-3 w-full sm:w-auto font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 active:scale-95"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;