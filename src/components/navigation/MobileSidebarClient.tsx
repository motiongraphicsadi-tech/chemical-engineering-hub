
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

  subjects: {
    slug: string;
    title: string;

    topics: {
      slug: string;
      title: string;
    }[];
  }[];
};

export default function MobileSidebarClient({
  category,
  subject,
  subjects,
}: Props) {

  const pathname =
    usePathname();

  const [open, setOpen] =
    useState(false);

  const [expandedSubject, setExpandedSubject] =
    useState(subject);

  const [showCategorySelector, setShowCategorySelector] =
    useState(false);

  return (
    <>

      {/* Hamburger */}
      <button
         onClick={() => {
          setOpen(!open);
        
          if (!open) {
            setShowCategorySelector(false);
          }
        }}
        className="
          md:hidden

          fixed
          top-1
          left-1

          z-[999999]

          p-3

          rounded-lg

          bg-black/80
          backdrop-blur

          text-white
        "
      >
          {open ? (
           <X className="w-6 h-6" />
          ) : (
          <Menu className="w-6 h-6" />
          )}
      </button>
      {/*overlay*/}
      {open && (
           <div
           onClick={() => {
            setOpen(false);
            setShowCategorySelector(false);
          }}
            className="
              fixed
              inset-0

              bg-black/50
              backdrop-blur-sm

              z-[9999]

              md:hidden
             "
           />
           )}  

      {/* Drawer */}
      <aside
        className={`
          fixed
          top-0
          left-0
 
          h-screen
          w-[85%]
          max-w-[380px]

          bg-black

          z-[10000]

          overflow-y-auto

          transition-transform
          duration-300

          md:hidden

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Header */}
        <div
          className="
             sticky
             top-0

             bg-black

             border-b
             border-gray-800

             py-4
             pr-4

             flex
             justify-end
          "
        >

          <button
            onClick={() =>
              setShowCategorySelector(
                !showCategorySelector
              )
            }
            className="
              text-sm
              font-medium
              text-blue-400
            "
          >
            {showCategorySelector
              ? "Browse Topics"
              : "Change Subject"}
          </button>

        </div>

        {/* CATEGORY SELECTOR */}
        {showCategorySelector ? (

          <div className="p-4 space-y-4">

            <Link
              href="/core-subjects/heat-transfer/introduction"
              onClick={() =>{
                setShowCategorySelector(false);
                setOpen(false);
              }}
              className="
                block

                rounded-2xl
                border
                border-gray-800

                p-5
              "
            >
              <h3 className="text-emerald-400 font-semibold">
                ChemE Basics 📘
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Core chemical engineering fundamentals.
              </p>
            </Link>

            <Link
              href="/industrial-knowledge/industry-basics/introduction"
              onClick={() =>{
                setShowCategorySelector(false);
                setOpen(false);
              }}
              className="
                block

                rounded-2xl
                border
                border-gray-800

                p-5
              "
            >
              <h3 className="text-emerald-400 font-semibold">
                Industrial Knowledge 🏭
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Learn how industry operates.
              </p>
            </Link>

            <Link
              href="/industrial-safety/safety-basics/introduction"
              onClick={() =>{
                setShowCategorySelector(false);
                setOpen(false);
              }}
              className="
                block

                rounded-2xl
                border
                border-gray-800

                p-5
              "
            >
              <h3 className="text-emerald-400 font-semibold">
                Industrial Safety 🛡️
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Safety, hazards and risk awareness.
              </p>
            </Link>

            
          </div>

        ) : (

          <div className="px-4 py-6">

            {subjects.map(
              (currentSubject) => (

                <div
                  key={
                    currentSubject.slug
                  }
                  className="
                    mb-8
                    border-b
                    border-gray-800
                    pb-6
                  "
                >

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
                      text-lg
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

                  {expandedSubject === currentSubject.slug && (

                    <div
                      className="
                        mt-4

                        flex
                        flex-col
                        gap-2
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
                              onClick={() =>
                                setOpen(false)
                              }
                              className={`
                                px-4
                                py-3

                                rounded-lg

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
                        }
                      )}

                    </div>

                  )}

                </div>

              )
            )}

          </div>

        )}

      </aside>

    </>
  );
}

