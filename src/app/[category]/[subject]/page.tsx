import { redirect } from "next/navigation";

/*
  Redirect subject root
  to introduction topic

  Example:
  /core-subjects/heat-transfer
  ↓
  /core-subjects/heat-transfer/introduction
*/

export default async function SubjectPage({
  params,
}: {
  params: Promise<{
    category: string;
    subject: string;
  }>;
}) {

  const resolvedParams =
    await params;

  redirect(
    `/${resolvedParams.category}/${resolvedParams.subject}/introduction`
  );
}