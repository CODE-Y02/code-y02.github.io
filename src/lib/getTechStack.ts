import { promises as fs } from "fs";
import path from "path";

export type TechItem = {
  label: string;
  icon: string;
  color?: string;
};

export async function getTechStack(): Promise<TechItem[]> {
  const filePath = path.join(process.cwd(), "src/data/techstack.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}
