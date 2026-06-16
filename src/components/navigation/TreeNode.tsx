"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  const pathname = usePathname();

  const [open, setOpen] =
    useState(
      pathname.startsWith(node.path)
    );

  const isActive =
    pathname === node.path;

  if (node.type === "page") {
    return (
      <Link
        href={node.path}
        className={`
          block
          py-2
          px-3
          rounded-md
          text-sm

          ${
            isActive
              ? "bg-emerald-500/20 text-white"
              : "text-gray-400 hover:text-white hover:bg-zinc-900"
          }
        `}
        style={{
          marginLeft: `${level * 12}px`,
        }}
      >
        {node.name}
      </Link>
    );
  }

  return (
    <div>

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          w-full
          flex
          justify-between
          items-center

          py-2
          px-3

          text-left

          text-white
          font-medium
        "
        style={{
          marginLeft: `${level * 12}px`,
        }}
      >
        <span>{node.name}</span>

        <span>
          {open ? "▼" : "▶"}
        </span>

      </button>

      {open &&
        node.children?.map(
          (child) => (
            <TreeNode
              key={child.path}
              node={child}
              level={level + 1}
            />
          )
        )}
    </div>
  );
}