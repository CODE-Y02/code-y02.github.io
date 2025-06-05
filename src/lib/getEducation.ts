import { promises as fs } from "fs";
import path from "path";

export type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  icon: string;
};

export async function getEducation(): Promise<EducationItem[]> {
  const filePath = path.join(process.cwd(), "src/data/education.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}
