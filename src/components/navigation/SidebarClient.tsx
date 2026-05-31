
"use client";

import { useState } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

type Props = {
  category: string;

  subject: string;

  subjects: {
    slug: string;
    title: string;

    topics: {
      slug: string;
      title: string;
    }[];
  }[];
};

export default function SidebarClient({
  category,
  subject,
  subjects,
}: Props) {

  const pathname =
    usePathname();

    const [expandedSubject, setExpandedSubject] =
    useState(subject || subjects?.[0]?.slug);

  return (

    <aside
      className="
        hidden
        lg:flex

        flex-col

        w-[320px]

        h-[calc(100vh-56px)]

        sticky
        top-14

        shrink-0

        bg-black

        border-r
        border-gray-800
      "
    >

      {/* =====================================
          Sidebar Header
      ====================================== */}

      <div
        className="
          px-5
          py-4

          border-b
          border-gray-800
        "
      >

        <h2
          className="
            text-sm
            font-semibold

            text-gray-400

            uppercase
            tracking-wider
          "
        >
          CEH Explorer
        </h2>

      </div>

      {/* =====================================
          Navigation Area
      ====================================== */}

      <div
        className="
          flex-1

          overflow-y-auto

          px-4
          py-5
        "
      >

        {subjects.map(
          (currentSubject) => (

            <div
              key={
                currentSubject.slug
              }
              className="
                mb-6

                border-b
                border-gray-800

                pb-6
              "
            >

              {/* Subject Button */}

              <button
                onClick={() =>
                  setExpandedSubject(
                    expandedSubject === currentSubject.slug
                      ? ""
                      : currentSubject.slug
                  )
                }
                className="
                  w-full

                  flex
                  items-center
                  justify-between

                  text-left

                  text-white
                  font-semibold
                "
              >

                <span>
                  {currentSubject.title}
                </span>

                <span>
                  {expandedSubject === currentSubject.slug
                    ? "▼"
                    : "▶"}
                </span>

              </button>

              {/* Topics */}

              {expandedSubject === currentSubject.slug && (

                <div
                  className="
                    mt-4

                    flex
                    flex-col
                    gap-1
                  "
                >

                  {currentSubject.topics.map(
                    (topic) => {

                      const href =
                        `/${category}/${currentSubject.slug}/${topic.slug}`;

                      const isActive =
                        pathname === href;

                      return (

                        <Link
                          key={
                            topic.slug
                          }
                          href={href}
                          className={`
                            px-3
                            py-2

                            rounded-lg

                            transition-all

                            ${
                              isActive
                                ? `
                                  bg-emerald-500/15
                                  text-white
                                  border-l-2
                                  border-emerald-400
                                `
                                : `
                                  text-gray-400
                                  hover:text-white
                                  hover:bg-gray-900
                                `
                            }
                          `}
                        >
                          {topic.title}
                        </Link>

                      );
                    }
                  )}

                </div>

              )}

            </div>

          )
        )}

      </div>

      {/* =====================================
          Bottom User Section
      ====================================== */}

      <div
        className="
          border-t
          border-gray-800

          p-4
        "
      >

        <p
          className="
            text-sm
            text-gray-500
          "
        >
          Student Dashboard
        </p>

      </div>

    </aside>

  );
}

