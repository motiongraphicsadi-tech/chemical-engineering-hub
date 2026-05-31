"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

type Subject = {
  slug: string;
  title: string;
};

type Props = {
  category: string;
  subjects: Subject[];
};

export default function SubjectNavbarClient({
  category,
  subjects,
}: Props) {

  const pathname = usePathname();

  return (
    <div
      className="
           hidden md:flex

           items-center
           gap-4
           overflow-y-hidden
           scrollbar-hide
           overflow-x-auto
           whitespace-nowrap
           border-b
           border-gray-800
           bg-gray-950
           px-4
           py-3
           text-sm
          "
    >

      {subjects.map((subject) => {

        const slug = subject.slug;

        const isActive =
          pathname.includes(slug);

        return (
          <Link
            key={slug}

            href={`/${category}/${slug}/introduction`}

            className={`
              whitespace-nowrap
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