"use client";

import { useState } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";

type Props = {
  category: string;

  subject: string;

  topics: {
    slug: string;
    title: string;
  }[];
};

export default function MobileSidebarClient({
  category,
  subject,
  topics,
}: Props) {

  const pathname = usePathname();

  const [open, setOpen] =
    useState(false);

  return (

    <>

      {/* Hamburger */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          md:hidden

          fixed
          top-20
          left-4

          z-[999999]

          pointer-events-auto

          p-3
          rounded-full

          bg-black

          border
          border-gray-700

          shadow-lg
        "
      >

        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}

      </button>

      {/* Sidebar Drawer */}
      <aside
        className={
          `
            fixed
            top-0
            left-0

            h-screen
            w-72

            bg-black
            border-r
            border-gray-800

            z-[100000]

            overflow-y-auto

            transition-transform
            duration-300

            pt-20
            px-4

            md:hidden
          ` +
          (open
            ? " translate-x-0"
            : " -translate-x-full")
        }
      >

        {/* Subject */}
        <h2
          className="
            text-lg
            font-semibold
            text-white
            mb-6
          "
        >

          {subject
            ?.replace(/-/g, " ")
            ?.replace(
              /\b\w/g,
              (char) =>
                char.toUpperCase()
            )}

        </h2>

        {/* Topics */}
        <div className="space-y-2">

          {topics?.map((topic) => {

            const href =
              `/${category}/${subject}/${topic.slug}`;

            const isActive =
              pathname === href;

            return (

              <Link
                key={topic.slug}

                href={href}

                onClick={() =>
                  setOpen(false)
                }

                className={`
                  block
                  rounded-lg

                  px-4
                  py-3

                  transition-colors

                  ${
                    isActive
                      ? "bg-blue-500/20 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-900"
                  }
                `}
              >

                {topic.title}

              </Link>

            );
          })}

        </div>

      </aside>

    </>
  );
}