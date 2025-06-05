"use client";
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { personalInfo } from "@/data/personalInfo";
import Link from "next/link";
export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-orange-400"
        >
          Contact
        </motion.h2>
        <div className="bg-[#232222] rounded-2xl p-8 shadow flex flex-col items-center gap-6">
          <p className="text-lg text-gray-300 text-center">
            Interested in working together or just want to say hi? Reach out!
          </p>
          <div className="flex gap-6 justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-orange-400"
                  asChild
                >
                  <Link
                    href={"mailto:" + personalInfo.contacts.email || "#"}
                    aria-label="Email"
                    target="_blank"
                  >
                    <FaEnvelope />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-orange-400"
                  asChild
                >
                  <Link
                    href={personalInfo.contacts.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-orange-400"
                  asChild
                >
                  <Link
                    href={personalInfo.contacts.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-orange-400"
                  asChild
                >
                  <Link
                    href={personalInfo.contacts.x || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Twitter</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
