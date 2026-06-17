import MobileSidebar from "./MobileSidebar";

import { getContentTree }
from "@/lib/getContentTree";

export default function MobileSidebarWrapper({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {

  const tree =
    getContentTree();

  return (
    <MobileSidebar
      open={open}
      onClose={onClose}
      tree={tree}
    />
  );
}