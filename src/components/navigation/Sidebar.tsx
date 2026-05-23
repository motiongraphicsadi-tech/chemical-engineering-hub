import { getTopics } from "@/lib/getTopics";

import SidebarClient from "./SidebarClient";

type Props = {
  category: string;
  subject: string;
};

export default function Sidebar({
  category,
  subject,
}: Props) {

  /*
    Dynamically load topics
    for current subject
  */
  const topics = getTopics(
    category,
    subject
  );

  return (
    <SidebarClient
      category={category}
      subject={subject}
      topics={topics}
    />
  );
}