
import fs from "fs";
import path from "path";

import { formatTitle } from "./slug";

export function getSubjectsWithTopics(
  category: string
) {

  const categoryPath = path.join(
    process.cwd(),
    `src/content/${category}`
  );

  const subjects =
    fs.readdirSync(categoryPath);

  return subjects.map((subject) => {

    const subjectPath =
      path.join(
        categoryPath,
        subject
      );

    const topicFiles =
      fs.readdirSync(subjectPath);

    const topics =
      topicFiles
        .filter(
          (file) =>
            file.endsWith(".mdx")
        )
        .map((file) => ({
          slug:
            file.replace(
              ".mdx",
              ""
            ),

          title:
            formatTitle(
              file.replace(
                ".mdx",
                ""
              )
            ),
        }));

    return {
      slug: subject,
      title: formatTitle(subject),
      topics,
    };
  });
}

