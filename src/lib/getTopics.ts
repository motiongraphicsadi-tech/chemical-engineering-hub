import fs from "fs";
import path from "path";
import { formatTitle } from "./slug";

export function getTopics(subject: string) {
  const subjectPath = path.join(
    process.cwd(),
    "src/content/core-subjects",
    subject
  );

  const files = fs.readdirSync(subjectPath);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
      title: formatTitle(
        file.replace(".mdx", "")
      ),
    }));
}