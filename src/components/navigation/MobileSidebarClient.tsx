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
        onClick={() => setOpen(!open)}
        className="
          p-2
          rounded-md
          hover:bg-gray-800
          transition-colors
        "
      >

        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}

      </button>

      {/* Mobile Drawer */}
      {open && (

        <div
          className="
            fixed
            inset-0
            top-14
            bg-black
            z-[9999]
            overflow-y-auto
            border-t
            border-gray-800
            p-6
          "
        >

          {/* Subject Title */}
          <h2
            className="
              text-lg
              font-semibold
              text-white
              mb-6
            "
          >

            {subject
              .replace("-", " ")
              .replace(
                /\b\w/g,
                (char) =>
                  char.toUpperCase()
              )}

          </h2>

          {/* Topics */}
          <div className="space-y-2">

            {topics.map((topic) => {

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
                    px-4
                    py-3
                    rounded-lg
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

        </div>

      )}

    </>

  );
}