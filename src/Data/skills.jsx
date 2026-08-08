import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiOpenai,
  SiRailway,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaTools,
  FaBrain,
  FaRobot,
  FaChalkboardTeacher,
  FaDatabase,
  FaCogs,
  FaCode,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const skillsList = [
  {
    title: "Generative AI & Teaching",
    categoryIcon: <FaBrain />,
    items: [
      { icon: <FaBrain />, name: "Prompt Engineering" },
      { icon: <FaRobot />, name: "LLM Fundamentals (GPT, Claude, Gemini)" },
      { icon: <FaCogs />, name: "LangChain / RAG" },
      { icon: <SiOpenai />, name: "OpenAI API" },
      { icon: <FaDatabase />, name: "Vector DBs" },
      { icon: <FaChalkboardTeacher />, name: "Curriculum Design" },
    ],
  },
  {
    title: "Languages",
    categoryIcon: <FaCode />,
    items: [
      { icon: <SiJavascript />, name: "JavaScript (ES6+)" },
      { icon: <SiPython />, name: "Python (Basics)" },
    ],
  },
  {
    title: "Frontend",
    categoryIcon: <FaLaptopCode />,
    items: [
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    categoryIcon: <FaServer />,
    items: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <FaTools />, name: "REST APIs" },
      { icon: <SiJavascript />, name: "JWT Authentication" },
    ],
  },
  {
    title: "Database",
    categoryIcon: <FaDatabase />,
    items: [{ icon: <SiMysql />, name: "MYSQL" }],
  },
  {
    title: "Tools",
    categoryIcon: <FaTools />,
    items: [
      { icon: <SiGit />, name: "Git" },
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <VscVscode />, name: "VS Code" },
      { icon: <FaTools />, name: "Chrome DevTools" },
    ],
  },
  {
    title: "Deployment",
    categoryIcon: <TbWorldWww />,
    items: [
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <TbWorldWww />, name: "Render" },
      { icon: <SiRailway />, name: "Railway" },
      { icon: <TbWorldWww />, name: "Custom Domain Setup" },
    ],
  },
];

export default skillsList;