"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ✅ Mobile sidebar drawer component
import MobileSidebar from "./MobileSidebar";

const categories = [
  {
    name: "Subject Prep",

    // Default landing route
    href: "/core-subjects/heat-transfer/introduction",

    // Used for active route highlighting
    match: "/core-subjects/",
  },

  {
    name: "Interview Prep",
    href: "/interview",
    match: "/interview",
  },

  {
    name: "Industrial Knowledge",
    href: "/industrial-knowledge",
    match: "/industrial-knowledge",
  },

  {
    name: "Case Studies",
    href: "/case-studies",
    match: "/case-studies",
  },

  {
    name: "Tools",
    href: "/tools",
    match: "/tools",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="
        min-h-14
        border-b
        border-gray-800
        bg-black
        px-4
        md:px-6
        flex
        items-center
        gap-4
        md:gap-8
        text-sm
        text-white
      "
    >

      {/* 
        ✅ MOBILE SIDEBAR BUTTON

        IMPORTANT:
        We DO NOT import Sidebar here.

        WHY?

        Sidebar uses:
        - fs
        - path

        which only work in SERVER components.

        Header is a CLIENT component.

        Importing Sidebar here causes:
        ❌ Module not found: fs
      */}
      <div className="md:hidden">

        <MobileSidebar>

          {/* 
            Temporary mobile navigation placeholder

            Later:
            dynamic mobile sidebar will go here
          */}
          <div className="p-4 text-white">
            Mobile Navigation
          </div>

        </MobileSidebar>

      </div>

      {/* ✅ PLATFORM TITLE */}
      <h1 className="text-xl font-bold whitespace-nowrap">
        ChemEng Platform
      </h1>

      {/* 
        ✅ MAIN NAVIGATION

        overflow-x-auto
        = prevents navbar breaking on mobile

        whitespace-nowrap
        = keeps items in single row
      */}
      <nav
        className="
          flex
          gap-3
          md:gap-6
          overflow-x-auto
          whitespace-nowrap
        "
      >
        {categories.map((category) => {

          // ✅ Detect active route
          const isActive = pathname.includes(
            category.match
          );

          return (
            <Link
              key={category.name}
              href={category.href}
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
              {category.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}