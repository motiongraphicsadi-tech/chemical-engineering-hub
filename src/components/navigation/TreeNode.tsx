"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  ChevronRight,
  FileText,
} from "lucide-react";

type ContentNode = {
  name: string;
  slug: string;
  path: string;
  type: "folder" | "page";
  children?: ContentNode[];
};

type Props = {
  node: ContentNode;
  level?: number;
};

export default function TreeNode({
  node,
  level = 0,
}: Props) {

  const pathname =
    usePathname();

  /*
    Auto-expand folders that
    contain the current page.
  */
  const [open, setOpen] =
    useState(
      pathname.startsWith(
        node.path
      )
    );

  const isActive =
    pathname === node.path;

  /*
    =====================================
    PAGE
    =====================================
  */
  if (node.type === "page") {

    return (

      <Link
        href={node.path}
        className={`
          group

          flex
          items-center
          gap-2

          px-3
          py-1.5

          rounded-lg

          text-[13px]

          transition-all
          duration-200

          ${
            isActive
              ? `
                bg-zinc-900

                text-white

                ring-1
                ring-emerald-500/20

                shadow-[0_0_0_1px_rgba(16,185,129,0.15)]
              `
              : `
                text-zinc-400

                hover:text-white
                hover:bg-zinc-900
              `
          }
        `}
        style={{
          marginLeft:
            `${level * 14}px`,
        }}
      >

        <FileText
          className={`
            h-3.5
            w-3.5

            shrink-0

            ${
              isActive
                ? "text-emerald-400"
                : "text-zinc-500"
            }
          `}
        />

        <span className="truncate">
          {node.name}
        </span>

      </Link>

    );
  }

  /*
    =====================================
    FOLDER
    =====================================
  */
  return (

    <div>

      <button
        onClick={() =>
          setOpen(!open)
        }
        className={`
          group

          w-full

          flex
          items-center
          justify-between

          px-3
          py-2

          rounded-lg

          text-left

          transition-all
          duration-200

          ${
            level === 0
              ? `
                text-emerald-400
                text-sm
                font-semibold
              `
              : `
                text-zinc-400
                text-[13px]
                font-medium
              `
          }

          hover:bg-zinc-900
        `}
        style={{
          marginLeft:
            `${level * 14}px`,
        }}
      >

        <span className="truncate">
          {node.name}
        </span>

        <ChevronRight
          className={`
            h-4
            w-4

            text-zinc-500

            transition-transform
            duration-200

            ${
              open
                ? "rotate-90"
                : ""
            }
          `}
        />

      </button>

      {open && (

        <div className="mt-1">

          {node.children?.map(
            (child) => (
              <TreeNode
                key={child.path}
                node={child}
                level={
                  level + 1
                }
              />
            )
          )}

        </div>

      )}

    </div>

  );
}