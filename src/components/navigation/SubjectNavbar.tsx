import { getSubjects } from "@/lib/getSubjects";

import SubjectNavbarClient from "./SubjectNavbarClient";

type Props = {
  category: string;
};

export default function SubjectNavbar({
  category,
}: Props) {

  const subjects =
    getSubjects(category);

  return (
    <SubjectNavbarClient
      category={category}
      subjects={subjects}
    />
  );
}