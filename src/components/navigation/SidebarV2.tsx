import { getContentTree }
from "@/lib/getContentTree";

import TreeNode
from "./TreeNode";

export default function SidebarV2() {

  const tree =
    getContentTree();

  return (

    <aside
      className="
        w-[320px]
        h-screen

        overflow-y-auto

        border-r
        border-zinc-800

        bg-black

        p-4
      "
    >

      <h2
        className="
          text-white
          font-bold
          mb-6
        "
      >
        Documentation
      </h2>

      <div className="space-y-1">

        {tree.map((node) => (
          <TreeNode
            key={node.path}
            node={node}
          />
        ))}

      </div>

    </aside>

  );
}