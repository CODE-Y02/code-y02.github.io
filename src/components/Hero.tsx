"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { personalInfo } from "@/data/personalInfo";
import Link from "next/link";

const navItems = [
  { label: "Tech Stack", target: "techstack" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Hobbies", target: "hobbies" },
  { label: "Contact", target: "contact" },
];

export default function Hero() {
  // Smooth scroll handler (same as Navbar)
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center " id="intro">
      <span className="text-orange-400 font-medium flex items-center gap-2 mb-2">
        <span className="w-8 h-0.5 bg-orange-400 inline-block" /> Hello
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 text-center">
        I&apos;m{" "}
        <span className="text-orange-500">
          <Typewriter
            words={personalInfo.titleAlt}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </span>
      </h1>
      <p className="text-gray-300 text-lg mt-4 text-center max-w-2xl">
        {personalInfo.description}
      </p>
      {/* Nav buttons for large screens */}
      <div className="hidden lg:flex gap-4 mt-8">
        {navItems.map(
          (item) =>
            item.label !== "Contact" && (
              <Button
                key={item.target}
                onClick={() => handleScroll(item.target)}
                className="px-5 py-2 rounded text-white font-medium bg-[#232222] hover:bg-orange-500 hover:text-white transition border border-[#353232] shadow"
              >
                {item.label}
              </Button>
            )
        )}
      </div>
      {/* Icon nav for mobile using shadcn/ui Button and Tooltip */}
      <div className="flex lg:hidden gap-4 mt-8">
        {/* Tech Stack */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="bg-[#232222] text-orange-400 hover:bg-orange-500 hover:text-white"
              onClick={() => handleScroll("techstack")}
              aria-label="Tech Stack"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l9 4.9v9.8L12 22l-9-5.3V6.9L12 2z" />
              </svg>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Tech Stack</TooltipContent>
        </Tooltip>
        {/* Experience */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="bg-[#232222] text-orange-400 hover:bg-orange-500 hover:text-white"
              onClick={() => handleScroll("experience")}
              aria-label="Experience"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 21v-2a4 4 0 00-8 0v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Experience</TooltipContent>
        </Tooltip>
        {/* Projects */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="bg-[#232222] text-orange-400 hover:bg-orange-500 hover:text-white"
              onClick={() => handleScroll("projects")}
              aria-label="Projects"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" />
              </svg>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Projects</TooltipContent>
        </Tooltip>
        {/* Contact */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="bg-[#232222] text-orange-400 hover:bg-orange-500 hover:text-white"
              onClick={() => handleScroll("contact")}
              aria-label="Contact"
            >
              <FaGithub />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Contact</TooltipContent>
        </Tooltip>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
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
      {/* <Button
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition w-max mt-8"
        asChild
      >
        <a href="mailto:yatharthmain@gmail.com">Contact Me</a>
      </Button> */}
    </section>
  );
}
