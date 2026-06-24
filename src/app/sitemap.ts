import type { MetadataRoute } from "next";

import fs from "fs";
import path from "path";

const BASE_URL =
  "https://chemical-engineering-hub.vercel.app";

function getAllMdxFiles(
  dir: string,
  baseDir: string
): string[] {

  const entries =
    fs.readdirSync(dir, {
      withFileTypes: true,
    });

  let urls: string[] = [];

  for (const entry of entries) {

    const fullPath =
      path.join(dir, entry.name);

    if (entry.isDirectory()) {

      urls = [
        ...urls,
        ...getAllMdxFiles(
          fullPath,
          baseDir
        ),
      ];

      continue;
    }

    if (!entry.name.endsWith(".mdx"))
      continue;

    const relative =
      path.relative(
        baseDir,
        fullPath
      );

    const slug =
      relative
        .replace(/\.mdx$/, "")
        .replace(/\\/g, "/");

    urls.push(slug);
  }

  return urls;
}

export default function sitemap(): MetadataRoute.Sitemap {

  const contentDir =
    path.join(
      process.cwd(),
      "src/content"
    );

  const pages =
    getAllMdxFiles(
      contentDir,
      contentDir
    );

  const sitemapPages =
    pages.map((page) => ({

      url:
        `${BASE_URL}/${page}`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly" as const,

      priority:
        page.includes(
          "introduction"
        )
          ? 0.9
          : 0.8,
    }));

  return [

    {
      url: BASE_URL,

      lastModified:
        new Date(),

      changeFrequency:
        "daily",

      priority: 1,
    },

    ...sitemapPages,
  ];
}