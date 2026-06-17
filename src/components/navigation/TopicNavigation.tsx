import Link from "next/link";

type Props = {
  previous?: {
    title: string;
    href: string;
  };

  next?: {
    title: string;
    href: string;
  };
};

export default function TopicNavigation({
  previous,
  next,
}: Props) {

  if (!previous && !next) {
    return null;
  }

  return (

    <div
      className="
        mt-12
        pt-6

        border-t
        border-zinc-800
      "
    >

      <div
        className="
          flex
          items-center
          justify-between

          gap-6
        "
      >

        {/* Previous */}

        <div className="flex-1">

          {previous && (

            <Link
              href={previous.href}
              className="
                group
                block
              "
            >

              <p
                className="
                  text-xs
                  text-zinc-500

                  group-hover:text-emerald-400

                  transition-colors
                "
              >
                ← Previous
              </p>

              <p
                className="
                  mt-1

                  text-sm
                  text-white

                  group-hover:text-emerald-400

                  transition-colors
                "
              >
                {previous.title}
              </p>

            </Link>

          )}

        </div>

        {/* Next */}

        <div
          className="
            flex-1
            text-right
          "
        >

          {next && (

            <Link
              href={next.href}
              className="
                group
                block
              "
            >

              <p
                className="
                  text-xs
                  text-zinc-500

                  group-hover:text-emerald-400

                  transition-colors
                "
              >
                Next →
              </p>

              <p
                className="
                  mt-1

                  text-sm
                  text-white

                  group-hover:text-emerald-400

                  transition-colors
                "
              >
                {next.title}
              </p>

            </Link>

          )}

        </div>

      </div>

    </div>

  );
}