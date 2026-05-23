import fs from "fs";

import path from "path";

import { formatTitle } from "./slug";

export function getSubjects(
  category: string
) {

  const contentPath = path.join(
    process.cwd(),
    `src/content/${category}`
  );

  const subjects =
    fs.readdirSync(contentPath);

  return subjects.map((subject) => ({
    slug: subject,

    title: formatTitle(subject),
  }));
}