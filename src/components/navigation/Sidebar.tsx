import { getTopics } from "@/lib/getTopics";

import SidebarClient from "./SidebarClient";

import MobileSidebarClient from "./MobileSidebarClient";

import { getSubjectsWithTopics } from "@/lib/getSubjectsWithTopics";

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

  const subjects =
    getSubjectsWithTopics(
      category
    );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">

      <SidebarClient
        category={category}
        subject={subject}
        subjects={subjects}
      />

      </div>

      {/* Mobile Sidebar */}
      <MobileSidebarClient
        category={category}
        subject={subject}
        topics={topics}
        subjects={subjects}
      />

    </>
  );
}