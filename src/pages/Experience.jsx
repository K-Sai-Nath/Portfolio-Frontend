import React from "react";
import SpotlightCard from "../components/SpotlightCard";
import ElectricBorder from "../components/ElectricBorder";
import AnimatedContent from "../components/AnimatedContent";

const experiences = [
  {
    title: "SAP Compensation Intern",
    company: "Accenture",
    location: "Bengaluru",
    duration: "Feb 2025 – Jun 2025",
    description:
      "Configured and maintained the SAP SuccessFactors Compensation module to support global compensation cycles, ensuring seamless execution across regions. Migrated eight learning boards, each containing over fifty items, into SAP Collections and Communities of Practice (CoPs), improving accessibility and global collaboration. Collaborated with cross-functional teams to optimize global compensation structures, aligning them with business rules and learning strategies. Additionally, automated eligibility rule setups and guideline enforcement processes, reducing manual administrative effort by 30% and enhancing operational efficiency.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-20 px-6 md:px-12 flex flex-col justify-center items-center"
    >
      {/* ===== Section Heading ===== */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white tracking-wide">
          Experience
        </h2>
      </div>

      {/* ===== Experience Card ===== */}
      <div className="flex justify-center w-full">
        {experiences.map((exp, index) => (
          <AnimatedContent
            key={index}
            distance={150}
            direction="vertical"
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
              <SpotlightCard
                spotlightColor="rgba(0, 229, 255, 0.2)"
                className="max-w-2xl w-full p-8"
              >
                <div className="flex flex-col justify-between h-full">
                  <h3 className="text-3xl font-semibold text-cyan-400 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-1">
                    {exp.company} | {exp.location}
                  </p>
                  <p className="text-md text-gray-400 mb-4">{exp.duration}</p>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </SpotlightCard>
            </ElectricBorder>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
