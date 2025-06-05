"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import education from "@/data/education";

const Education: React.FC = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-orange-400">
          Education
        </h2>
        <div className="flex flex-col gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#232222] rounded-xl shadow-lg border-l-4 border-orange-500 pl-6 pr-4 py-6"
            >
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-2xl text-orange-400" />
                <div>
                  <div className="font-semibold text-white text-lg">
                    {edu.degree}
                  </div>
                  <div className="text-orange-400 font-medium">
                    {edu.institution}
                  </div>
                  <div className="text-gray-400 text-sm">{edu.grade}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
