import React from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-start py-16 px-4 lg:px-8 bg-[var(--bg-color)]"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white tracking-wide mb-10">
        About
      </h2>

      {/* Description */}
      <p className="text-[var(--secondary-color)] text-lg sm:text-xl md:text-lg text-center max-w-3xl mb-12">
        Hi! I’m Sai Nath Kancharakuntla, a Packaged App Developer Associate. I
        am passionate about building interactive web applications using React,
        Node.js, and MongoDB. I focus on writing clean, scalable, and efficient
        code.
      </p>

      {/* Education ScrollStack */}
      <div className="w-full max-w-4xl h-[70vh]">
        <ScrollStack useWindowScroll={false} itemDistance={30}>
          <ScrollStackItem>
            <h3 className="text-[5rem] font-bold mb-4">
              B.Tech in Computer Science
            </h3>
            <p className="text-[3rem] font-semibold mb-2">S R University</p>
            <p className="text-[2rem]">2021 - 2025</p>
          </ScrollStackItem>

          <ScrollStackItem>
            <h3 className="text-[5rem] font-bold mb-4">Intermediate</h3>
            <p className="text-[3rem] font-semibold mb-2">
              Narayana Junior College
            </p>
            <p className="text-[2rem]">2019 - 2021</p>
          </ScrollStackItem>

          <ScrollStackItem>
            <h3 className="text-[5rem] font-bold mb-4">
              High School (10th Grade)
            </h3>
            <p className="text-[3rem] font-semibold mb-2">
              Montessori High School
            </p>
            <p className="text-[2rem]">2018 - 2019</p>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
}

export default About;
