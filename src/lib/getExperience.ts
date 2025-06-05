import { promises as fs } from "fs";
import path from "path";

export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string[];
  icon: string;
};

export async function getExperience(): Promise<ExperienceItem[]> {
  const filePath = path.join(process.cwd(), "src/data/experience.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}
