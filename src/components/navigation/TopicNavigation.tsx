import Link from "next/link";

type TopicLink = {
    title: string;
    href: string;
  };
  
  type Props = {
    previous: TopicLink | null;
    next: TopicLink | null;
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

        w-full

        border-t
        border-zinc-800

        pt-6
      "
    >

      <div
        className="
          flex
          justify-between
          items-start

          gap-8
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

                  transition-colors

                  group-hover:text-emerald-400
                "
              >
                ← Previous
              </p>

              <p
                className="
                  mt-1

                  text-base
                  font-medium

                  text-white

                  transition-colors

                  group-hover:text-emerald-400
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

                  transition-colors

                  group-hover:text-emerald-400
                "
              >
                Next →
              </p>

              <p
                className="
                  mt-1

                  text-base
                  font-medium

                  text-white

                  transition-colors

                  group-hover:text-emerald-400
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