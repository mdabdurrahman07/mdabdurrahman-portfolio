import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

export const educationData = [
    {
      id: 1,
      exam: "BBA (Bachelor of Business Administration)",
      institution: "Kabi Nazrul Govt. College",
      board: "Dhaka",
      result: "CGPA: 3.10 out of 4.00 (3rd Year)",
      icon: <FaUniversity className="w-5 h-5 text-primary" />,
      current: true,
    },
    {
      id: 2,
      exam: "HSC (Higher Secondary Certificate)",
      institution: "National Ideal College",
      board: "Dhaka",
      result: "GPA: 3.75 out of 5.00",
      icon: <FaGraduationCap className="w-5 h-5 text-secondary" />,
      current: false,
    },
    {
      id: 3,
      exam: "SSC (Secondary School Certificate)",
      institution: "K.L Jubilee School & College",
      board: "Dhaka",
      result: "GPA: 3.89 out of 5.00",
      icon: <FaSchool className="w-5 h-5 text-accent" />,
      current: false,
    },
  ];