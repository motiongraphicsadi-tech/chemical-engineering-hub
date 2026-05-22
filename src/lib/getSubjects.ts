import fs from "fs";
import path from "path";
import { formatTitle } from "./slug";

const CONTENT_PATH = path.join(
  process.cwd(),
  "src/content/core-subjects"
);

export function getSubjects() {
  const subjects = fs.readdirSync(CONTENT_PATH);

  return subjects.map((subject) => ({
    slug: subject,
    title: formatTitle(subject),
  }));
}