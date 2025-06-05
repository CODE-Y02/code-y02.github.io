"use client";
import { FaBriefcase } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import experience from "@/data/experience";

// const experience = [
//   {
//     icon: <FaBriefcase className="text-2xl text-orange-400" />,
//     title: "Software Engineer",
//     company: "ABC Corp",
//     duration: "2022 - Present",
//     description: [
//       "Developed scalable web applications using React and Node.js.",
//       "Collaborated with cross-functional teams to deliver projects on time.",
//       "Implemented RESTful APIs and integrated third-party services.",
//     ],
//   },
//   {
//     icon: <FaBriefcase className="text-2xl text-orange-400" />,
//     title: "Frontend Developer",
//     company: "XYZ Solutions",
//     duration: "2021 - 2022",
//     description: [
//       "Built responsive UI components with React and Tailwind CSS.",
//       "Optimized web performance and accessibility.",
//       "Worked closely with designers to create engaging user experiences.",
//     ],
//   },
// ];

const Experience: React.FC = () => {
  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-orange-400">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#232222] rounded-xl shadow-lg border-l-4 border-orange-500 pl-6 pr-4 py-6"
            >
              <div className="flex items-center gap-4">
                <FaBriefcase className="text-2xl text-orange-400" />
                <div>
                  <div className="font-semibold text-white text-lg">
                    {exp.title}
                  </div>
                  <div className="text-orange-400 font-medium">
                    {exp.company}
                  </div>
                  <div className="text-gray-400 text-sm">{exp.duration}</div>
                </div>
              </div>
              <ul className="list-disc pl-6 mt-3">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="text-gray-300 text-sm mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
