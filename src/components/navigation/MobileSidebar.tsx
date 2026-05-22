"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import MobileTopicsAccordion from "./MobileTopicsAccordion";

export default function MobileSidebar() {

  /*
    Mobile menu state
  */
  const [open, setOpen] =
    useState(false);

  return (

    <div className="md:hidden">

      {/* 
        Mobile menu button
      */}
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

      {/* 
        Inline mobile navigation

        Improvements:
        ✅ Stable mobile UX
        ✅ No Radix Sheet issues
        ✅ Better documentation UX
      */}
      {open && (

        <div
          className="
            absolute
            top-14
            left-0
            w-full
            bg-black
            border-t
            border-gray-800
            z-50
            p-6
            overflow-y-auto
            max-h-[calc(100vh-56px)]
          "
        >

          <MobileTopicsAccordion
            closeMenu={() => setOpen(false)}
          />

        </div>

      )}

    </div>
  );
}