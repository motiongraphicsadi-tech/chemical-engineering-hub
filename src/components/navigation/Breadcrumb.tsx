"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumb() {

  const pathname = usePathname()

  const segments = pathname.split("/").filter(Boolean)

  return (
    <div className="mb-8 text-sm text-gray-400 flex gap-2 flex-wrap">

      <Link href="/" className="hover:text-white">
        Home
      </Link>

      {segments.map((segment, index) => {

        const href = "/" + segments.slice(0, index + 1).join("/")

        const formatted = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())

        return (
          <div key={href} className="flex gap-2">

            <span>/</span>

            <Link
              href={href}
              className="hover:text-white"
            >
              {formatted}
            </Link>

          </div>
        )
      })}
    </div>
  )
}