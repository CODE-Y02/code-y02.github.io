import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
// import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-20 px-4 py-8 md:px-0 md:py-16">
      <Hero />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      {/* <Hobbies /> */}
      <Contact />
    </main>
  );
}
