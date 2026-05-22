import { getTopics } from "@/lib/getTopics";

import SidebarClient from "./SidebarClient";

type Props = {
  subject: string;
};

export default function Sidebar({
  subject,
}: Props) {

  /*
    Dynamically load topics
    for current subject
  */
  const topics = getTopics(subject);

  return (
    <SidebarClient
      subject={subject}
      topics={topics}
    />
  );
}