"use client";

type Props = {
  headings: string[];
};

function slugify(
  text: string
) {

  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function TableOfContents({
  headings,
}: Props) {

  if (
    headings.length === 0
  ) {
    return null;
  }

  return (

    <aside
      className="
        hidden
        xl:block

        w-64

        sticky
        top-20

        h-fit

        shrink-0
      "
    >

      <h3
        className="
          mb-4

          text-xs
          font-semibold

          uppercase
          tracking-wider

          text-zinc-500
        "
      >
        On This Page
      </h3>

      <nav>

        <ul
          className="
            space-y-2
          "
        >

          {headings.map(
            (heading) => (

              <li
                key={heading}
              >

            <a
             href={`#${slugify(
               heading
             )}`}
              onClick={(e) => {
            
                e.preventDefault();
            
                const element =
                 document.getElementById(
                    slugify(heading)
                  );
            
                  if (element) {

                    console.log(
                      "SCROLLING TO:",
                      slugify(heading)
                    );
                  
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  
                  }
             }}
             className="
               text-sm

               text-zinc-400

               hover:text-emerald-400

               transition-colors
             "
           >
             {heading}
           </a>                  

              </li>

            )
          )}

        </ul>

      </nav>

    </aside>

  );
}