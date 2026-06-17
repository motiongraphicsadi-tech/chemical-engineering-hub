"use client";

import TreeNode from "./TreeNode";

type ContentNode = {
  name: string;
  slug: string;
  path: string;
  type: "folder" | "page";
  children?: ContentNode[];
};

type Props = {
  open: boolean;
  onClose: () => void;
  tree: ContentNode[];
};

export default function MobileSidebar({
  open,
  onClose,
  tree,
}: Props) {

  return (
    <>

      {open && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0

            bg-black/60

            z-[1000]
          "
        />
      )}

      <aside
        className={`
          fixed

          top-0
          left-0

          h-screen

          w-[85vw]
          max-w-[320px]

          bg-zinc-950

          border-r
          border-zinc-800

          z-[1001]

          overflow-y-auto

          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        <div
          className="
            p-5

            flex
            items-center
            justify-between

            border-b
            border-zinc-800
          "
        >

          <h2
            className="
              text-lg
              font-semibold

              text-white
            "
          >
            Browse Topics
          </h2>

          <button
            onClick={onClose}
            className="
              text-zinc-400

              hover:text-white
            "
          >
            ✕
          </button>

        </div>

        <div
          className="
            p-4

            space-y-1
          "
        >

          {tree.map(
            (node) => (

              <TreeNode
                key={node.path}
                node={node}
              />

            )
          )}

        </div>

      </aside>

    </>
  );
}