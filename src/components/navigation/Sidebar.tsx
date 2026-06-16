import { getContentTree } from "@/lib/getContentTree";
import TreeNode from "./TreeNode";

type Props = {
  currentSlug?: string[];
};

export default function Sidebar({
  currentSlug = [],
}: Props) {

  const tree =
    getContentTree();

  /*
    Example:

    URL:
    /core-subjects/thermodynamics/introduction

    currentSlug:
    [
      "core-subjects",
      "thermodynamics",
      "introduction"
    ]

    We only want to show the
    active root section inside
    the sidebar.

    Example:

    Core Subjects
      ├ Thermodynamics
      ├ Heat Transfer
      ├ Fluid Mechanics

    When user enters:

    /core-subjects/...

    We show only the contents
    of Core Subjects.
  */
  const activeRoot =
    currentSlug[0];

  const currentRoot =
    tree.find(
      (node) =>
        node.slug === activeRoot
    );

  if (!currentRoot) {
    return null;
  }

  return (

    <aside
      className="
        hidden
        lg:block

        w-[280px]

        h-[calc(100vh-56px)]

        sticky
        top-14

        overflow-y-auto

        border-r
        border-zinc-800

        bg-black

        p-4
      "
    >

      {/* Sidebar Title */}

      <h2
        className="
          mb-5

          text-xs
          font-semibold

          uppercase
          tracking-[0.15em]

          text-zinc-500
        "
      >
        {currentRoot.name}
      </h2>

      {/* Navigation Tree */}

      <nav className="space-y-1">

        {currentRoot.children?.map(
          (node) => (
            <TreeNode
              key={node.path}
              node={node}
            />
          )
        )}

      </nav>

    </aside>

  );
}