import fs from "fs";
import path from "path";

export interface ContentNode {
  name: string;
  slug: string;
  path: string;
  type: "folder" | "page";
  children?: ContentNode[];
}

const CONTENT_ROOT = path.join(
  process.cwd(),
  "src/content"
);

/*
  Convert slug names into
  human readable titles.

  Example:

  fluid-mechanics
  →

  Fluid Mechanics
*/
function formatName(
  slug: string
) {
  return slug
    .replace(/-/g, " ")
    .replace(
      /\b\w/g,
      (c) => c.toUpperCase()
    );
}

/*
  Reads optional folder ordering
  from _meta.json

  Example:

  {
    "order": [
      "introduction",
      "entropy",
      "fugacity"
    ]
  }
*/
function getFolderOrder(
  dir: string
): string[] {

  const metaPath = path.join(
    dir,
    "_meta.json"
  );

  if (!fs.existsSync(metaPath)) {
    return [];
  }

  try {

    const meta = JSON.parse(
      fs.readFileSync(
        metaPath,
        "utf-8"
      )
    );

    return meta.order || [];

  } catch {

    return [];
  }
}

/*
  Recursively scan content folders
  and build navigation tree.
*/
function scanDirectory(
  dir: string,
  relativePath = ""
): ContentNode[] {

  const entries =
    fs.readdirSync(dir, {
      withFileTypes: true,
    });

  const nodes: ContentNode[] = [];

  for (const entry of entries) {

    /*
      Ignore metadata files.
    */
    if (
      entry.name === "_meta.json"
    ) {
      continue;
    }

    const fullPath = path.join(
      dir,
      entry.name
    );

    const entryPath =
      relativePath
        ? `${relativePath}/${entry.name}`
        : entry.name;

    /*
      Folder
    */
    if (entry.isDirectory()) {

      nodes.push({
        name: formatName(
          entry.name
        ),

        slug: entry.name,

        path: `/${entryPath}`,

        type: "folder",

        children:
          scanDirectory(
            fullPath,
            entryPath
          ),
      });

      continue;
    }

    /*
      MDX Page

      Using filename extension only
      because Windows + OneDrive can
      sometimes report file types
      inconsistently.
    */
    if (
      entry.name.endsWith(".mdx")
    ) {

      const slug =
        entry.name.replace(
          /\.mdx$/,
          ""
        );

      nodes.push({
        name: formatName(slug),

        slug,

        path:
          `/${entryPath.replace(
            /\.mdx$/,
            ""
          )}`,

        type: "page",
      });

      continue;
    }
  }

  const order =
    getFolderOrder(dir);

  /*
    Apply custom ordering from
    _meta.json when available.

    Otherwise fallback to
    alphabetical sorting.
  */
  return nodes.sort(
    (a, b) => {

      const aIndex =
        order.indexOf(a.slug);

      const bIndex =
        order.indexOf(b.slug);

      if (
        aIndex === -1 &&
        bIndex === -1
      ) {
        return a.name.localeCompare(
          b.name
        );
      }

      if (aIndex === -1) {
        return 1;
      }

      if (bIndex === -1) {
        return -1;
      }

      return aIndex - bIndex;
    }
  );
}

/*
  Entry point for sidebar
  navigation generation.
*/
export function getContentTree() {
  return scanDirectory(
    CONTENT_ROOT
  );
}