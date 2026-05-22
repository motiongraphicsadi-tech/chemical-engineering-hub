"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Subject = {
  slug: string;
  title: string;
};

type Props = {
  subjects: Subject[];
};

export default function SubjectNavbarClient({
  subjects,
}: Props) {
  const pathname = usePathname();

  return (
    <div
      className="
        flex
        items-center
        gap-4
        overflow-x-auto
        whitespace-nowrap
        border-b
        border-gray-800
        bg-gray-950
        px-4
        py-3
        text-sm

        /*
          Improvement:
          Scrollable mobile navigation
        */
      "
    >
      {subjects.map((subject) => {

        const slug = subject.slug;

        const isActive =
          pathname.includes(slug);

        return (
          <Link
            key={slug}
            href={`/core-subjects/${slug}/introduction`}
            className={`
              pb-1
              transition-all
              duration-200
              hover:text-white
              ${
                isActive
                  ? "text-white border-b-2 border-blue-500"
                  : "text-gray-400"
              }
            `}
          >
            {subject.title}
          </Link>
        );
      })}
    </div>
  );
}