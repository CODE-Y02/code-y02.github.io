import React from "react";
import {
  SiExpress,
  SiTypescript,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiJavascript,
  SiGraphql,
  SiDocker,
  SiRedux,
  SiTailwindcss,
  SiAwsamplify,
  SiSequelize,
  SiHtml5,
  SiCss3,
  SiJirasoftware,
  SiSlack,
  SiZoom,
  SiGithub,
  SiRecoil,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaDatabase, FaGit, FaEnvelope, FaMobileAlt, FaCloud, FaUserShield, FaCogs, FaUsers } from "react-icons/fa";

const techStack: { icon: React.ReactNode; label: string; color: string }[] = [
  // Backend Development
  { icon: <SiExpress className="text-3xl" color="#000000" />, label: "Express.js", color: "#000000" },
  { icon: <SiGraphql className="text-3xl" color="#E10098" />, label: "GraphQL", color: "#E10098" },
  { icon: <SiDocker className="text-3xl" color="#2496ED" />, label: "Docker", color: "#2496ED" },
  { icon: <FaNodeJs className="text-3xl" color="#339933" />, label: "Node.js", color: "#339933" },
  { icon: <SiTypescript className="text-3xl" color="#3178C6" />, label: "TypeScript", color: "#3178C6" },
  { icon: <FaUserShield className="text-3xl" color="#F9A825" />, label: "Authentication", color: "#F9A825" },
  { icon: <FaCogs className="text-3xl" color="#4B5563" />, label: "System Design", color: "#4B5563" },

  // Frontend Development
  { icon: <FaReact className="text-3xl" color="#61DAFB" />, label: "React.js", color: "#61DAFB" },
  { icon: <SiNextdotjs className="text-3xl" color="#000000" />, label: "Next.js", color: "#000000" },
  { icon: <FaMobileAlt className="text-3xl" color="#5A29E4" />, label: "React Native Expo", color: "#5A29E4" },
  { icon: <SiRedux className="text-3xl" color="#764ABC" />, label: "Redux", color: "#764ABC" },
  { icon: <SiRecoil className="text-3xl" color="#3578E5" />, label: "Recoil", color: "#3578E5" },
  { icon: <FaCogs className="text-3xl" color="#52C2AF" />, label: "Zustand", color: "#52C2AF" },
  { icon: <FaUsers className="text-3xl" color="#4B5563" />, label: "Context API", color: "#4B5563" },
  { icon: <SiTailwindcss className="text-3xl" color="#06B6D4" />, label: "Tailwind CSS", color: "#06B6D4" },

  // Database & DevOps
  { icon: <FaDatabase className="text-3xl" color="#4B5563" />, label: "NoSQL & SQL", color: "#4B5563" },
  { icon: <SiMongodb className="text-3xl" color="#47A248" />, label: "MongoDB", color: "#47A248" },
  { icon: <SiMysql className="text-3xl" color="#4479A1" />, label: "MySQL", color: "#4479A1" },
  { icon: <SiPostgresql className="text-3xl" color="#336791" />, label: "PostgreSQL", color: "#336791" },
  { icon: <SiRedis className="text-3xl" color="#DC382D" />, label: "Redis", color: "#DC382D" },
  { icon: <SiPrisma className="text-3xl" color="#2D3748" />, label: "Prisma ORM", color: "#2D3748" },
  { icon: <FaCogs className="text-3xl" color="#E74C3C" />, label: "Objection.js", color: "#E74C3C" },
  { icon: <SiSequelize className="text-3xl" color="#52B0E7" />, label: "Sequelize", color: "#52B0E7" },

  // Misc
  { icon: <SiAwsamplify className="text-3xl" color="#FF9900" />, label: "AWS", color: "#FF9900" },
  { icon: <FaCloud className="text-3xl" color="#38BDF8" />, label: "CI/CD", color: "#38BDF8" },
  { icon: <FaGit className="text-3xl" color="#F05032" />, label: "Git", color: "#F05032" },
  { icon: <SiGithub className="text-3xl" color="#181717" />, label: "GitHub", color: "#181717" },
  { icon: <SiJavascript className="text-3xl" color="#F7DF1E" />, label: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript className="text-3xl" color="#3178C6" />, label: "TypeScript", color: "#3178C6" },
  { icon: <SiHtml5 className="text-3xl" color="#E34F26" />, label: "HTML5", color: "#E34F26" },
  { icon: <SiCss3 className="text-3xl" color="#1572B6" />, label: "CSS3", color: "#1572B6" },

  // Remote Collaboration Tools
  { icon: <SiSlack className="text-3xl" color="#4A154B" />, label: "Slack", color: "#4A154B" },
  { icon: <FaEnvelope className="text-3xl" color="#0072C6" />, label: "Outlook", color: "#0072C6" },
  { icon: <SiJirasoftware className="text-3xl" color="#0052CC" />, label: "Jira", color: "#0052CC" },
  { icon: <SiZoom className="text-3xl" color="#2D8CFF" />, label: "Zoom", color: "#2D8CFF" },
];

export default techStack;
