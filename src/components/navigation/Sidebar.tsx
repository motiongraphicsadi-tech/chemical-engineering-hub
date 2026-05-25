import { getTopics } from "@/lib/getTopics";

import SidebarClient from "./SidebarClient";

import MobileSidebarClient
from "./MobileSidebarClient";

type Props = {
  category: string;
  subject: string;
};

export default function Sidebar({
  category,
  subject,
}: Props) {

  const topics = getTopics(
    category,
    subject
  );

  return (
    <>
  
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
  
        <SidebarClient
          category={category}
          subject={subject}
          topics={topics}
        />
  
      </div>
  
      {/* Mobile Sidebar */}
      <div className="md:hidden">
  
        <MobileSidebarClient
          category={category}
          subject={subject}
          topics={topics}
        />
  
      </div>
  
    </>
  );
}