import fs from "fs";
import path from "path";

export function getTopicProgress(
  currentFilePath: string
) {

  const currentDir =
    path.dirname(
      currentFilePath
    );

  const metaPath =
    path.join(
      currentDir,
      "_meta.json"
    );

  if (
    !fs.existsSync(metaPath)
  ) {
    return null;
  }

  const meta =
    JSON.parse(
      fs.readFileSync(
        metaPath,
        "utf-8"
      )
    );

  const order: string[] =
    meta.order || [];

  const currentSlug =
    path.basename(
      currentFilePath,
      ".mdx"
    );

  const currentIndex =
    order.indexOf(
      currentSlug
    );

  if (
    currentIndex === -1
  ) {
    return null;
  }

  return {
    current:
      currentIndex + 1,

    total:
      order.length,
  };
}