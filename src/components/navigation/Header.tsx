"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";

import {
  Home,
  Menu,
  LayoutDashboard,
  User,
} from "lucide-react";

import MobileSidebar
from "@/components/navigation/MobileSidebar";

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
];

type ContentNode = {
  name: string;
  slug: string;
  path: string;
  type: "folder" | "page";
  children?: ContentNode[];
};

export default function Header({
  tree,
}: {
  tree: ContentNode[];
}) {

  const pathname =
    usePathname();

  const [open, setOpen] =
    useState(false);

  return (

    <>

      <header
        className="
          fixed
          top-0
          left-0
          right-0

          z-[999]

          h-14

          border-b
          border-zinc-800

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

          {/* MOBILE MENU */}

          <button
            onClick={() =>
              setOpen(true)
            }
            className="
              lg:hidden

              flex
              items-center
              justify-center

              text-white
            "
          >
            <Menu
              className="
                h-5
                w-5
              "
            />
          </button>

          {/* LOGO */}

          <div
            className="
              flex
              items-center

              min-w-0

              flex-1
              lg:flex-none
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
                ChemE Hub
              </span>

            </Link>

          </div>

          {/* DESKTOP NAV */}

          <nav
            className="
              hidden
              md:flex

              flex-1

              items-center

              gap-6

              ml-8

              text-sm
            "
          >

            {categories.map(
              (category) => {

                const isActive =
                  pathname.includes(
                    category.match
                  );

                return (

                  <Link
                    key={category.name}
                    href={category.href}
                    className={`
                      whitespace-nowrap

                      transition-all

                      hover:text-white

                      ${
                        isActive
                          ? "text-white border-b-2 border-emerald-500 pb-1"
                          : "text-zinc-400"
                      }
                    `}
                  >
                    {category.name}
                  </Link>

                );
              }
            )}

          </nav>

          {/* HOME + DASHBOARD */}

<div
  className="
    flex
    items-center
    gap-2
    shrink-0
  "
>

<Link
  href="/dashboard"
  className="
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
    

    text-white
    border-zinc-800
    
    text-zinc-300
    
    hover:text-white
    hover:border-emerald-500
       "
    >

<LayoutDashboard
  className="
    h-4
    w-4

    md:hidden
  "
/>

<span className="hidden md:inline">
  Dashboard
</span>

</Link>

{/* user profile */}

<Link
  href="/profile"
  className="
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

  <User
    className="
      h-4
      w-4

      md:hidden
    "
  />

  <span className="hidden md:inline">
    Profile
  </span>

</Link>

  <Link
    href="/"
    className="
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

    <Home
      className="
        h-4
        w-4

        md:hidden
      "
    />

    <span className="hidden md:inline">
      Home
    </span>

  </Link>

</div>

        </div>

      </header>

      <MobileSidebar
           open={open}
           onClose={() =>
             setOpen(false)
           }
           tree={tree}
         />         

    </>

  );
}