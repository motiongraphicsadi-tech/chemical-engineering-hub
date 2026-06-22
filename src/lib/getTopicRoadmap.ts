import fs from "fs";
import path from "path";

function formatTitle(
  slug: string
) {
  return slug
    .replace(/-/g, " ")
    .replace(
      /\b\w/g,
      (c) => c.toUpperCase()
    );
}

export function getTopicRoadmap(
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
    return [];
  }

  const meta =
    JSON.parse(
      fs.readFileSync(
        metaPath,
        "utf8"
      )
    );

  const order =
    meta.order || [];

  return order.map(
    (
      slug: string,
      index: number
    ) => ({
      step: index + 1,
      slug,
      title:
        formatTitle(slug),
    })
  );
}