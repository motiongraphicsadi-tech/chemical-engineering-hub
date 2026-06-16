import { getContentTree } from "@/lib/getContentTree";

export default function TestTree() {
  const tree = getContentTree();

  return (
    <pre>
      {JSON.stringify(tree, null, 2)}
    </pre>
  );
}