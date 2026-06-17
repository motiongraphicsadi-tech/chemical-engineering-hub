import Header from "./Header";
import { getContentTree } from "@/lib/getContentTree";

export default function HeaderWrapper() {

  const tree =
    getContentTree();

  return (
    <Header
      tree={tree}
    />
  );
}