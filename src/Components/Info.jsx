/* eslint-disable react/no-unescaped-entities */
import { GrDocumentDownload } from "react-icons/gr";
import { Typewriter } from "react-simple-typewriter";
const PDF_FILE_URL =
  "https://md-abdur-rahman-fb9bd.web.app/MD_Abdur_Rahman_Nur_Jamil_RESUME_2024.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "./SocialIcons/SocialIcons";
AOS.init();
const Info = () => {
  const download_file = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="space-y-7" data-aos="fade-up">
      <h1 className="text-5xl font-bold">
        Hi, I'm{" "}
        <span
          className="bg-gradient-to-r from-blue-500 to-teal-500"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          MD Abdur Rahman
        </span>
      </h1>
      <h1 className="text-4xl font-bold">
        <Typewriter
          words={["Full Stack Developer", "Web Developer"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>
      {/* <h1 className="text-2xl font-medium ">
      
      </h1> */}

      {/* socail media  */}
      <SocialIcons />
      {/* resume download */}
      <div>
        <button
          onClick={() => {
            download_file(PDF_FILE_URL);
          }}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500  px-4 py-2 flex justify-center items-center gap-3 
                shadow-lg shadow-indigo-500/50 rounded-xl font-semibold text-lg"
        >
          <span>
            <GrDocumentDownload className="font-extrabold text-lg animate-bounce"></GrDocumentDownload>
          </span>
          <span>Resume</span>
        </button>
      </div>
    </div>
  );
};

export default Info;
