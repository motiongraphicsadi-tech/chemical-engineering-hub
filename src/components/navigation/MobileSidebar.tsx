"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSidebar({
  open,
  onClose,
}: Props) {

  return (
    <>

      {/* Overlay */}

      {open && (

        <div
          onClick={onClose}
          className="
            fixed
            inset-0

            bg-black/60

            z-[1000]
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

          w-[85vw]
          max-w-[320px]

          bg-zinc-950

          border-r
          border-zinc-800

          z-[1001]

          overflow-y-auto

          transition-transform
          duration-300

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
            p-5

            flex
            items-center
            justify-between

            border-b
            border-zinc-800
          "
        >

          <h2
            className="
              text-lg
              font-semibold

              text-white
            "
          >
            Browse Topics
          </h2>

          <button
            onClick={onClose}
            className="
              text-zinc-400

              hover:text-white

              transition-colors
            "
          >
            ✕
          </button>

        </div>

        {/* Temporary Content */}

        <div
          className="
            p-5

            space-y-3
          "
        >

          <div
            className="
              rounded-lg

              border
              border-zinc-800

              p-4

              text-zinc-300
            "
          >
            ChemE Basics
          </div>

          <div
            className="
              rounded-lg

              border
              border-zinc-800

              p-4

              text-zinc-300
            "
          >
            Industrial Knowledge
          </div>

          <div
            className="
              rounded-lg

              border
              border-zinc-800

              p-4

              text-zinc-300
            "
          >
            Industrial Safety
          </div>

        </div>

      </aside>

    </>

  );
}