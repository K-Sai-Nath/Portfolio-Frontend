import React, { useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiPython,
  SiExpress,
  SiGit,
  SiGithub,
  SiMysql,
  SiReactos,
} from "react-icons/si";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaGlobe,
  FaLayerGroup,
  FaCuttlefish,
  FaJava,
  FaPython as FaPythonIcon,
  FaJsSquare,
  FaProjectDiagram,
  FaBrain,
} from "react-icons/fa";
const skillsData = [
  // Programming Languages
  {
    name: "C",
    icon: <FaCuttlefish color="#A8B9CC" />,
    category: "Programming Languages",
    level: 90,
  },
  {
    name: "Java",
    icon: <FaJava color="#f89820" />,
    category: "Programming Languages",
    level: 90,
  },
  {
    name: "Python",
    icon: <FaPythonIcon color="#3776AB" />,
    category: "Programming Languages",
    level: 98,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare color="#F7DF1E" />,
    category: "Programming Languages",
    level: 90,
  },

  // Frontend
  {
    name: "HTML",
    icon: <SiHtml5 color="#E34F26" />,
    level: 95,
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: <SiCss3 color="#1572B6" />,
    level: 90,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <SiReact color="#61DAFB" />,
    level: 90,
    category: "Frontend",
  },
  {
    name: "React Native",
    icon: <SiReactos color="#61DAFB" />,
    level: 90,
    category: "Frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: <SiNodedotjs color="#68A063" />,
    level: 90,
    category: "Backend",
  },
  {
    name: "Express",
    icon: <SiExpress color="#ffffff" />,
    level: 90,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#47A248" />,
    level: 90,
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#00758F" />,
    level: 85,
    category: "Backend",
  },

  // Core CS Concepts (DSA)
  {
    name: "Data Structures",
    icon: <FaProjectDiagram color="#00bcd4" />,
    level: 90,
    category: "Core CS Concepts",
  },
  {
    name: "Algorithms",
    icon: <FaBrain color="#ff9800" />,
    level: 90,
    category: "Core CS Concepts",
  },

  // Tools
  {
    name: "Git",
    icon: <SiGit color="#F05032" />,
    level: 85,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <SiGithub color="#ffffff" />,
    level: 90,
    category: "Tools",
  },
];

const categories = [
  { name: "All", icon: <FaLayerGroup /> },
  { name: "Programming Languages", icon: <FaCode /> },
  { name: "Frontend", icon: <FaGlobe /> },
  { name: "Backend", icon: <FaServer /> },
  { name: "Core CS Concepts", icon: <FaProjectDiagram /> },
  { name: "Tools", icon: <FaTools /> },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-12  text-white flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white tracking-wide mb-10">
        Skills
      </h2>
      {/* Category Buttons with Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-14">
        {categories.map((category) => (
          <button
            key={category.name}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setActiveCategory(category.name);
              console.log(category.name);
            }}
            className={`flex items-center gap-3 px-6 py-2 text-lg font-semibold rounded-full transition-all border ${
              activeCategory === category.name
                ? "bg-blue-600 text-white border-blue-600 scale-105 shadow-lg"
                : "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:scale-105"
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 max-w-6xl items-start justify-items-center transition-all duration-500">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-900 to-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300 w-full max-w-sm flex flex-col items-center"
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}
