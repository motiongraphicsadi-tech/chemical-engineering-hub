type RoadmapItem = {
  step: number;
  slug: string;
  title: string;
};

type Props = {
  roadmap: RoadmapItem[];
  currentSlug: string;
  current: number;
  total: number;
  basePath: string;
};

export default function TopicRoadmap({
  roadmap,
  currentSlug,
  current,
  total,
  basePath,
}: Props) {

  const progress =
    (current / total) * 100;

  return (

    <div
      className="
        not-prose
        mb-6

        rounded-xl
        border
        border-emerald-500/20

        bg-emerald-500/5

        p-3
      "
    >

      <div
        className="
          mb-2

          flex
          items-center
          justify-between
        "
      >

        <h3
          className="
            m-0

            text-base
            font-semibold
          "
        >
          📚 Study Roadmap
        </h3>

        <span
          className="
            text-[10px]
            text-zinc-400
          "
        >
          {current}/{total}
        </span>

      </div>

      <div
        className="
          mb-3
          h-1

          rounded-full
          bg-zinc-800
        "
      >

        <div
          className="
            h-1

            rounded-full
            bg-emerald-400
          "
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div
        className="
          flex
          flex-wrap

          gap-1.5
        "
      >

        {roadmap.map((item) => {

          const isCurrent =
            item.slug === currentSlug;

          const number =
            String(
              item.step
            ).padStart(
              2,
              "0"
            );

          if (isCurrent) {

            return (

              <div
                key={item.slug}
                className="
                  flex
                  items-center

                  gap-1.5

                  rounded-full

                  border
                  border-emerald-400

                  bg-emerald-500/15

                  px-2
                  py-1

                  text-[11px]

                  font-medium

                  text-emerald-400
                "
              >

                <span
                  className="
                    rounded

                    bg-emerald-500/20

                    px-1.5
                    py-[1px]

                    font-mono
                    text-[10px]
                  "
                >
                  {number}
                </span>

                <span>
                  {item.title}
                </span>

              </div>

            );
          }

          return (

            <a
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              target="_self"
              className="
                flex
                items-center

                gap-1.5

                rounded-full

                border
                border-zinc-700

                px-2
                py-1

                text-[11px]

                transition

                hover:border-emerald-400
                hover:bg-emerald-500/10
              "
            >

              <span
                className="
                  rounded

                  bg-zinc-800

                  px-1.5
                  py-[1px]

                  font-mono
                  text-[10px]

                  text-emerald-400
                "
              >
                {number}
              </span>

              <span>
                {item.title}
              </span>

            </a>

          );

        })}

      </div>

    </div>

  );
}

