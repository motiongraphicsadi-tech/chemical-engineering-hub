import { getSubjects } from "@/lib/getSubjects";
import SubjectNavbarClient from "./SubjectNavbarClient";

export default function SubjectNavbar() {
  const subjects = getSubjects();

  return (
    <SubjectNavbarClient subjects={subjects} />
  );
}