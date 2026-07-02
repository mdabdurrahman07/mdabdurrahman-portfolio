/* eslint-disable react/no-unescaped-entities */
import { MdMarkEmailRead } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import jamil from "../../assets/pp/md_abdur_rahman.jpg";
import { Typewriter } from "react-simple-typewriter";
const About = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto my-20 p-4">
        <h1 className="text-5xl font-bold text-center mb-14">About</h1>
        <div className="flex-row lg:flex justify-between items-center gap-10 p-4">
          <div>
            <img
              src={jamil}
              alt=""
              className="max-w-xs md:max-w-md rounded-xl mx-auto mb-3"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
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
            <h1 className="text-3xl font-bold">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Web Developer",
                  "React Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
            <div>
              <h1 className="text-md font-medium">
                <div className="space-y-1">
                  <p>
                    Two years ago, I entered the tech world as a curious novice,
                    writing what I called "digital symphonies with MERN magic."
                    Today, I am a seasoned Full-Stack Web Developer specializing
                    in building scalable, type-safe, and intelligent web
                    applications.
                  </p>
                  <p>
                    My current toolkit features TypeScript, PostgreSQL, and
                    Prisma ORM, with a heavy engineering focus on AI-driven web
                    development. I am deeply passionate about technology,
                    hard-working, and thrive on transforming complex problems
                    into elegant, production-ready code.
                  </p>
                  <p>
                    When I am not in my IDE, you will find me exploring city
                    lanes with my camera, practicing street photography to
                    capture the world's raw, unscripted moments.
                  </p>
                </div>
              </h1>
            </div>
            <div>
              <span className="flex  gap-4 items-center font-medium text-xl">
                <MdMarkEmailRead></MdMarkEmailRead>
                <span className="truncate">
                  {" "}
                  mdabdurrahmannurjamil@gmail.com
                </span>
              </span>
              <span className="flex  gap-4 items-center font-medium text-xl">
                <MdCall></MdCall> +8801780714195
              </span>
              <span className="flex gap-4 items-center font-medium text-xl">
                <FaMap></FaMap> Dhaka, Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
