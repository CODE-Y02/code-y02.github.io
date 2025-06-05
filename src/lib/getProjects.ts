import { projects } from "@/data/projects";

export async function getProjects() {
  // const filePath = path.join(process.cwd(), "src/data/projects.json");
  // const data = await fs.readFile(filePath, "utf-8");
  // return JSON.parse(data);

  return projects;
}
