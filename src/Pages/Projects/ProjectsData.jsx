import unity from "../../assets/webs/unity-spark.jpg";
import momentum from "../../assets/webs/momentum.png";
import quill from "../../assets/webs/quil.png";
import elegant from "../../assets/webs/elegant.png";

export const projects = [
  {
    id: 1,
    title: "Unity Spark",
    slug: "unity-spark",

    category: "Full Stack",
    year: 2026,
    status: "Completed",
    featured: true,

    image: unity,

    shortDescription:
      "A collaborative HRM platform featuring attendance tracking, video meetings, chat, payroll, and training management.",

    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Firebase",
      "Stripe"
    ],

    github:
      "https://github.com/mursalinmirme/unity-spark/tree/Jamil",

    live:
      "https://unity-spark-22122.web.app/"
  },

  {
    id: 2,
    title: "Momentum Daily",
    slug: "momentum-daily",

    category: "Full Stack",
    year: 2025,
    status: "Completed",
    featured: true,

    image: momentum,

    shortDescription:
      "Modern newspaper platform with article publishing, premium subscription, Stripe payment, and admin dashboard.",

    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Firebase",
      "Stripe"
    ],

    github:
      "https://github.com/mdabdurrahman07/Momentum-Daily-Client",

    live:
      "https://momentum-daily.web.app/"
  },

  {
    id: 3,
    title: "Quill Quest",
    slug: "quill-quest",

    category: "Full Stack",
    year: 2025,
    status: "Completed",
    featured: true,

    image: quill,

    shortDescription:
      "Book management platform with authentication, CRUD operations, admin features, and responsive design.",

    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Firebase"
    ],

    github:
      "https://github.com/mdabdurrahman07/Quill-Quest-Client",

    live:
      "https://quillquest-92dfc.web.app/"
  },

  {
    id: 4,
    title: "Elegant Auto",
    slug: "elegant-auto",

    category: "Full Stack",
    year: 2025,
    status: "Completed",
    featured: true,

    image: elegant,

    shortDescription:
      "Car rental platform with authentication, booking system, and complete CRUD functionality.",

    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Firebase"
    ],

    github:
      "https://github.com/mdabdurrahman07/Elegant-Auto-Client",

    live:
      "https://elegant-auto.web.app/"
  }
];

