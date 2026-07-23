import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialIcons = () => {
    return (
         <div className="flex gap-5 pt-4">
            <Link
              className="hover:-translate-y-1.5 transition-transform p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              to="www.linkedin.com/in/mdabdurrahman-dev"
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
              to="https://www.instagram.com/mdabdurrahman.me"
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
            <Link
              className="hover:-translate-y-1.5 transition-transform p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              to="https://x.com/mabdurrahman07"
              target="_blank"
              aria-label="Facebook"
            >
              <FaXTwitter className="text-2xl text-stone-200" />
            </Link>
          </div>
    );
};

export default SocialIcons;
