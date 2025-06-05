"use client";
import React from "react";
import { motion } from "framer-motion";

import techStack from "@/data/techstack";

const TechStack: React.FC = () => {
  return (
    <motion.section
      id="techstack"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-orange-400">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col items-center bg-[#232222] rounded-xl shadow-lg p-6 min-w-[140px]"
            >
              <div>{tech.icon}</div>
              <div className="text-base font-medium text-center text-white mt-2">
                {tech.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
