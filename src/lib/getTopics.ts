import fs from "fs";

import path from "path";

import { formatTitle } from "./slug";

export function getTopics(
  category: string,
  subject: string
) {

  const subjectPath = path.join(
    process.cwd(),
    `src/content/${category}/${subject}`
  );

  /*
    Read manual topic order
    from meta.json
  */
  const metaPath = path.join(
    subjectPath,
    "meta.json"
  );

  /*
    If meta.json exists,
    use custom ordered topics
  */
  if (
    fs.existsSync(metaPath)
  ) {

    const metaData =
      fs.readFileSync(
        metaPath,
        "utf-8"
      );

    return JSON.parse(
      metaData
    );
  }

  /*
    Fallback:
    automatic filesystem order
  */
  const files =
    fs.readdirSync(subjectPath);

  return files
    .filter((file) =>
      file.endsWith(".mdx")
    )
    .map((file) => ({

      slug: file.replace(
        ".mdx",
        ""
      ),

      title: formatTitle(
        file.replace(
          ".mdx",
          ""
        )
      ),

    }));
}