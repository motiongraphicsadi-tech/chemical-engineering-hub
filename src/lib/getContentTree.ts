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

function formatName(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function scanDirectory(
  dir: string,
  relativePath = ""
): ContentNode[] {
  const entries = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  const nodes: ContentNode[] = [];

  for (const entry of entries) {
    const fullPath = path.join(
      dir,
      entry.name
    );

    const entryPath = relativePath
      ? `${relativePath}/${entry.name}`
      : entry.name;

    if (entry.isDirectory()) {
      nodes.push({
        name: formatName(entry.name),
        slug: entry.name,
        path: `/${entryPath}`,
        type: "folder",
        children: scanDirectory(
          fullPath,
          entryPath
        ),
      });

      continue;
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".mdx")
    ) {
      const slug =
        entry.name.replace(".mdx", "");

      nodes.push({
        name: formatName(slug),
        slug,
        path: `/${entryPath.replace(".mdx", "")}`,
        type: "page",
      });
    }
  }

  return nodes.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export function getContentTree() {
  return scanDirectory(CONTENT_ROOT);
}