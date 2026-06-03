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

  /*
  =====================================
  Read Subject Order from meta.json
  =====================================
  */

  const metaPath = path.join(
    categoryPath,
    "meta.json"
  );

  let subjects: {
    slug: string;
    title: string;
  }[] = [];

  if (fs.existsSync(metaPath)) {

    subjects = JSON.parse(
      fs.readFileSync(
        metaPath,
        "utf8"
      )
    );

  } else {

    /*
    Fallback to folder order
    */

    subjects = fs
      .readdirSync(categoryPath)
      .filter((item) => {

        const fullPath =
          path.join(
            categoryPath,
            item
          );

        return fs
          .statSync(fullPath)
          .isDirectory();

      })
      .map((subject) => ({
        slug: subject,
        title: formatTitle(subject),
      }));

  }

  /*
  =====================================
  Build Topics
  =====================================
  */

  return subjects.map(
    (subject) => {

      const subjectPath =
        path.join(
          categoryPath,
          subject.slug
        );

      /*
      =====================================
      Read Topic Order from meta.json
      =====================================
      */

      const topicMetaPath =
        path.join(
          subjectPath,
          "meta.json"
        );

      let topics: {
        slug: string;
        title: string;
      }[] = [];

      if (
        fs.existsSync(
          topicMetaPath
        )
      ) {

        topics = JSON.parse(
          fs.readFileSync(
            topicMetaPath,
            "utf8"
          )
        );

      } else {

        /*
        Fallback to filesystem
        */

        const topicFiles =
          fs.readdirSync(
            subjectPath
          );

        topics =
          topicFiles
            .filter(
              (file) =>
                file.endsWith(
                  ".mdx"
                )
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

      }

      return {

        slug:
          subject.slug,

        title:
          subject.title,

        topics,

      };

    }
  );
}