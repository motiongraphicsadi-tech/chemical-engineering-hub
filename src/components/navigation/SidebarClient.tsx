"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Topic = {
  slug: string;
  title: string;
};

type Props = {
  subject: string;
  topics: Topic[];
};

export default function SidebarClient({
  subject,
  topics,
}: Props) {
  const pathname = usePathname();

  return (
    <aside
      className="
        hidden
        md:block

        w-56

        border-r
        border-gray-800
        bg-gray-950

        min-h-screen
        p-4

        /*
          Improvement:
          Desktop only sidebar

          Mobile now uses dropdown/drawer
        */
      "
    >
      <div className="space-y-1">

        {topics.map((topic) => {

          const isActive =
            pathname.includes(topic.slug);

          return (
            <Link
              key={topic.slug}
              href={`/core-subjects/${subject}/${topic.slug}`}

              className={`
                block
                px-3
                py-2
                rounded-md

                transition-all
                duration-200

                hover:bg-gray-800
                hover:translate-x-1

                ${
                  isActive
                    ? `
                      bg-gray-800
                      text-white
                      border-l-2
                      border-blue-500
                    `
                    : "text-gray-400"
                }
              `}
            >
              {topic.title}
            </Link>
          );
        })}

      </div>
    </aside>
  );
}