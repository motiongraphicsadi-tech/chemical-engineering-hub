export default function HomePage() {
  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        px-6
        py-16
      "
    >

      {/* 
        Main content container

        Improvements:
        ✅ Better readability
        ✅ Controlled content width
        ✅ Prevents full-width text stretching
      */}
      <div
        className="
          max-w-4xl
          mx-auto
        "
      >

        {/* 
          HERO SECTION

          Improvements:
          ✅ Responsive typography
          ✅ Cleaner documentation feel
          ✅ Reduced visual clutter
          ✅ Better mobile UX
        */}
        <section className="space-y-6">

          {/* 
            Main heading

            Improvements:
            ✅ Removed oversized text
            ✅ Removed "Intelligence Platform"
            ✅ Responsive font scaling
          */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extrabold
              tracking-tight
              leading-tight
            "
          >
            Learn Chemical Engineering
          </h1>

          {/* 
            Supporting description

            Improvements:
            ✅ Better readability
            ✅ Controlled line width
            ✅ Softer visual contrast
          */}
          <p
            className="
              max-w-2xl
              text-base
              md:text-lg
              leading-8
              text-gray-400
            "
          >
            Structured chemical engineering
            knowledge focused on theory,
            industrial understanding,
            troubleshooting,
            optimization,
            and operational thinking.
          </p>

        </section>

      </div>

    </main>
  );
}