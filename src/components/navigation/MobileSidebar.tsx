"use client";

import { useState } from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navigation = [
  {
    title: "Subject Prep",

    subjects: [
      {
        title: "Heat Transfer",
        href: "/core-subjects/heat-transfer/introduction",
      },

      {
        title: "Mass Transfer",
        href: "/core-subjects/mass-transfer/introduction",
      },

      {
        title: "Fluid Mechanics",
        href: "/core-subjects/fluid-mechanics/introduction",
      },

      {
        title: "Thermodynamics",
        href: "/core-subjects/thermodynamics/introduction",
      },

      {
        title: "IPC",
        href: "/core-subjects/ipc/introduction",
      },
    ],
  },

  {
    title: "Interview Prep",

    subjects: [
      {
        title: "Heat Transfer",
        href: "/Interview-Prep/heat-transfer/introduction",
      },
    ],
  },

  {
    title: "Industrial Knowledge",

    subjects: [
      {
        title: "Operations",
        href: "/industrial-knowledge/operations/introduction",
      },
    ],
  },

  {
    title: "Case Studies",

    subjects: [
      {
        title: "Startup",
        href: "/case-studies/startup/introduction",
      },
    ],
  },

  {
    title: "Tools",

    subjects: [
      {
        title: "Calculators",
        href: "/tools/calculators/introduction",
      },
    ],
  },
];

export default function MobileSidebar() {

  const [open, setOpen] =
    useState(false);

  return (

    <div className="md:hidden">

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          p-2
          rounded-md
          hover:bg-gray-800
          transition-colors
        "
        aria-label="Toggle menu"
      >

        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}

      </button>

      {/* Mobile Navigation */}
      {open && (

        <div
          className="
            fixed
            inset-0
            top-14
            bg-black
            border-t
            border-gray-800
            z-[9999]
            p-6
            overflow-y-auto
          "
        >

          <div className="space-y-8">

            {navigation.map((category) => (

              <div key={category.title}>

                {/* Category */}
                <h2
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    text-gray-500
                    mb-4
                  "
                >
                  {category.title}
                </h2>

                {/* Subjects */}
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                >

                  {category.subjects.map((subject) => (

                    <AccordionItem
                      key={subject.title}
                      value={subject.title}
                      className="border-gray-800"
                    >

                      <AccordionTrigger
                        className="
                          text-white
                          hover:no-underline
                        "
                      >

                        {subject.title}

                      </AccordionTrigger>

                      <AccordionContent>

                        <Link
                          href={subject.href}

                          onClick={() => setOpen(false)}

                          className="
                            block
                            text-sm
                            text-gray-400
                            hover:text-white
                            transition-colors
                            pb-4
                          "
                        >

                          Introduction

                        </Link>

                      </AccordionContent>

                    </AccordionItem>

                  ))}

                </Accordion>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  );
}