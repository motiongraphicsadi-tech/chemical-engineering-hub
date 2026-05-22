"use client";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const subjects = [
  {
    name: "Heat Transfer",
    slug: "heat-transfer",

    topics: [
      "introduction",
      "conduction",
      "convection",
      "radiation",
      "heat-exchangers",
    ],
  },

  {
    name: "Mass Transfer",
    slug: "mass-transfer",

    topics: [
      "introduction",
    ],
  },

  {
    name: "Fluid Mechanics",
    slug: "fluid-mechanics",

    topics: [
      "introduction",
    ],
  },

  {
    name: "Thermodynamics",
    slug: "thermodynamics",

    topics: [
      "introduction",
    ],
  },

  {
    name: "IPC",
    slug: "ipc",

    topics: [
      "introduction",
    ],
  },
];

type Props = {
  closeMenu: () => void;
};

export default function MobileTopicsAccordion({
  closeMenu,
}: Props) {
  return (
    <div className="mt-6">

      <Accordion
        type="single"
        collapsible
        className="w-full"
      >

        {subjects.map((subject) => {

          return (
            <AccordionItem
              key={subject.slug}
              value={subject.slug}
              className="border-gray-800"
            >

              {/* Subject */}
              <AccordionTrigger
                className="
                  text-white
                  hover:no-underline
                "
              >
                {subject.name}
              </AccordionTrigger>

              {/* Topics */}
              <AccordionContent>

                <div className="space-y-3 pb-4">

                  {subject.topics.map((topic) => {

                    return (
                      <Link
                        key={topic}

                        href={`/core-subjects/${subject.slug}/${topic}`}

                        /*
                          IMPORTANT FIX

                          Close drawer BEFORE navigation
                        */
                        onClick={() => closeMenu()}

                        className="
                          block
                          text-sm
                          text-gray-400
                          hover:text-white
                          transition-colors
                        "
                      >

                        {topic
                          .replace("-", " ")
                          .replace(
                            /\b\w/g,
                            (char) =>
                              char.toUpperCase()
                          )}

                      </Link>
                    );
                  })}

                </div>

              </AccordionContent>

            </AccordionItem>
          );
        })}

      </Accordion>

    </div>
  );
}