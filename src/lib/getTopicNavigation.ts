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

export function getTopicNavigation(
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
    return {
      previous: null,
      next: null,
    };
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
    return {
      previous: null,
      next: null,
    };
  }

  const previousSlug =
    order[currentIndex - 1];

  const nextSlug =
    order[currentIndex + 1];

  const basePath =
    currentDir
      .replace(
        path.join(
          process.cwd(),
          "src/content"
        ),
        ""
      )
      .replaceAll(
        "\\",
        "/"
      );

  return {

    previous:
      previousSlug
        ? {
            title:
              formatTitle(
                previousSlug
              ),

            href:
              `${basePath}/${previousSlug}`,
          }
        : null,

    next:
      nextSlug
        ? {
            title:
              formatTitle(
                nextSlug
              ),

            href:
              `${basePath}/${nextSlug}`,
          }
        : null,
  };
}