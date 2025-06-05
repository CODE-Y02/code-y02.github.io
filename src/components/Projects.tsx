import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { getProjects } from "@/lib/getProjects";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

export default async function Projects() {
  const projects = await getProjects();
  return (
    <section className="py-16" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
              <CardHeader className="flex flex-row items-center justify-between z-20 relative">
                <div>
                  <CardTitle className="text-lg font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {project.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2 ml-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-600 text-lg"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-600 text-lg"
                      aria-label="Demo"
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 mt-2 z-20 relative">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
