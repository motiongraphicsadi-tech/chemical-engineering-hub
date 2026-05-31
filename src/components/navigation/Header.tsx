"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const categories = [
  {
    name: "ChemE basics",
    href: "/core-subjects/heat-transfer/introduction",
    match: "/core-subjects/",
  },

  {
    name: "Industrial Knowledge",
    href: "/industrial-knowledge/industry-basics/introduction",
    match: "/industrial-knowledge",
  },

  {
    name: "Industrial Safety",
    href: "/industrial-safety/safety-basics/introduction",
    match: "/industrial-safety",
  },

  {
    name: "Case Studies",
    href: "/case-studies/startup/introduction",
    match: "/case-studies",
  },

  {
    name: "Tools",
    href: "/tools/calculators/introduction",
    match: "/tools",
  },
];

export default function Header() {

  const pathname = usePathname();

  return (

    <header
      className="
        
        relative

        h-14
        border-b
        border-gray-800

        bg-black

        pl-14
        pr-4

        flex
        items-center

        text-white
      "
    >

      {/* LEFT SECTION */}
      <div
        className="
          flex
          items-center
          gap-3
          shrink-0
        "
      >

        {/* Logo */}
        <Link
          href="/"
          className="
            text-lg
            md:text-xl
            font-bold
            whitespace-nowrap
          "
        >
          ChemEng
        </Link>

      </div>

      {/* RIGHT NAVIGATION */}
      <nav
        className="
          flex
          items-center
          gap-4
          text-sm

          overflow-x-auto
          overflow-y-hidden

          scrollbar-hide

          ml-4

          md:ml-8
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
                pb-1
                whitespace-nowrap

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