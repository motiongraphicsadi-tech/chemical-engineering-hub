"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Home } from "lucide-react";

const categories = [
  {
    name: "ChemE Basics",
    href: "/core-subjects/thermodynamics/introduction",
    match: "/core-subjects/",
  },

  {
    name: "Industrial Knowledge",
    href: "/industrial-knowledge/industry-basics/introduction",
    match: "/industrial-knowledge",
  },

  {
    name: "Industrial Safety",
    href: "/industrial-safety/hazard-analysis/introduction",
    match: "/industrial-safety",
  },

  // {
  //   name: "Case Studies",
  //   href: "/case-studies/startup/introduction",
  //   match: "/case-studies",
  // },

  // {
  //   name: "Tools",
  //   href: "/tools/calculators/introduction",
  //   match: "/tools",
  // },
];

export default function Header() {

  const pathname = usePathname();

  return (

    <header
      className="
        fixed
        top-0
        left-0
        right-0

        z-[999]

        h-14

        border-b
        border-gray-800

        bg-black/95
        backdrop-blur

        text-white
      "
    >

      <div
        className="
          h-full

          px-4

          flex
          items-center
          justify-between

          gap-4
        "
      >

        {/* LEFT SIDE */}
        <div
          className="
            flex
            items-center

            min-w-0

            md:ml-0
            ml-10
          "
        >

          <Link
            href="/"
            className="
              font-bold

              truncate

              text-base
              md:text-xl
            "
          >

            <span className="hidden md:inline">
              ChemicalEngineeringHub.com
            </span>

            <span className="md:hidden">
              CEH
            </span>

          </Link>

        </div>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="
            hidden
            md:flex

            flex-1

            items-center

            gap-5

            ml-8

            text-sm
          "
        >

          {categories.map((category) => {

            const isActive =
              pathname.includes(category.match);

            return (

              <Link
                key={category.name}
                href={category.href}
                className={`
                  whitespace-nowrap

                  transition-all
                  duration-200

                  hover:text-white

                  ${
                    isActive
                      ? "text-white border-b-2 border-blue-500 pb-1"
                      : "text-gray-400"
                  }
                `}
              >
                {category.name}
              </Link>

            );
          })}

        </nav>

        {/* HOME BUTTON */}
        <Link
          href="/"
          className="
            shrink-0

            flex
            items-center
            justify-center

            h-9
            w-9

            md:h-auto
            md:w-auto

            md:px-3
            md:py-1.5

            rounded-lg

            border
            border-zinc-800

            text-zinc-300

            hover:text-white
            hover:border-emerald-500

            transition-all
          "
        >

          <Home className="w-4 h-4 md:hidden" />

          <span className="hidden md:inline">
            Home
          </span>

        </Link>

      </div>

    </header>

  );
}