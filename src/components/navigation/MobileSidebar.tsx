import { getSubjects } from "@/lib/getSubjects";
import { getTopics } from "@/lib/getTopics";

import MobileSidebarClient from "./MobileSidebarClient";

const categories = [
  {
    name: "Subject Prep",
    slug: "core-subjects",
  },

  {
    name: "Interview Prep",
    slug: "Interview-Prep",
  },

  {
    name: "Industrial Knowledge",
    slug: "industrial-knowledge",
  },

  {
    name: "Case Studies",
    slug: "case-studies",
  },

  {
    name: "Tools",
    slug: "tools",
  },
];

export default function MobileSidebar() {

  const navigation = categories.map(
    (category) => ({

      ...category,

      subjects: getSubjects(
        category.slug
      ).map((subject) => ({

        ...subject,

        topics: getTopics(
          category.slug,
          subject.slug
        ),

      })),

    })
  );

  return (
    <MobileSidebarClient
      navigation={navigation}
    />
  );
}