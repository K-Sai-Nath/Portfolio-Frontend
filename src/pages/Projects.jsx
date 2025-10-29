import React from "react";
import ElectricBorder from "../components/ElectricBorder";
import AnimatedContent from "../components/AnimatedContent";

const projects = [
  {
    id: 1,
    title: "Ease Commute",
    tech: "React.js, Node.js, Express.js, MongoDB, JWT",
    date: "Aug 2024 – Dec 2024",
    description:
      "Built a ride-sharing platform with search filters for departure, destination, and seat availability. Integrated Firebase Authentication with Google Sign-In and JWT for secure login. Implemented city auto-suggestions and real-time filtering, improving user experience. Developed the backend using Node.js, Express, and MongoDB queries to support seamless ride-matching.",
    link: "#",
  },
  {
    id: 2,
    title: "Authentication System",
    tech: "React.js, Node.js, Express.js, MongoDB, JWT",
    date: "Feb 2024 – Apr 2024",
    description:
      "Developed a full-stack authentication system with React frontend and Node.js/Express backend. Implemented secure login/signup using JWT and hashed passwords stored in MongoDB. Built role-based access control (RBAC) for managing permissions of different user types. Created RESTful APIs for login, signup, and token refresh, integrated seamlessly with React components.",
    link: "#",
  },
  {
    id: 3,
    title: "Diabetes Prediction",
    tech: "Machine Learning, Python, Supervised Learning",
    date: "Feb 2023 – Apr 2023",
    description:
      "Developed a machine learning model using logistic regression and decision trees with 90%+ accuracy. Applied classification algorithms including logistic regression and decision trees to improve prediction precision and recall, enabling early detection. Performed comprehensive model evaluation using precision, recall, F1-score, and ROC-AUC metrics to validate robustness and reliability.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6 md:px-12 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Centered Section Title */}
        <div className="flex items-center justify-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white tracking-wide">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <AnimatedContent
              key={project.id}
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="bounce.in"
              initialOpacity={0.2}
              animateOpacity
              scale={1.05}
              threshold={0.2}
              delay={0.3}
            >
              <ElectricBorder
                color="#7df9ff"
                speed={1.5}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16, padding: "1px" }}
              >
                <div className="bg-[#0a0a0a] rounded-xl p-8 min-h-[480px] md:min-h-[520px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_#7df9ff50]">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-1">{project.tech}</p>
                    <p className="text-sm text-gray-400 mb-3">{project.date}</p>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-6 py-3 mt-6 text-lg font-semibold text-black bg-[#7df9ff] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#7df9ff]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7df9ff] via-[#00e5ff] to-[#7df9ff] opacity-0 hover:opacity-100 transition-opacity duration-300 blur-md"></span>
                    <span className="relative z-10 flex items-center gap-2 text-black">
                      View Project <span className="text-xl">↗</span>
                    </span>
                  </a>
                </div>
              </ElectricBorder>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
