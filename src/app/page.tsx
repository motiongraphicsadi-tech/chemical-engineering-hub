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
        <section className="max-w-4xl space-y-8">

<div className="space-y-3">

  <p
    className="
      text-sm
      font-medium
      uppercase
      tracking-[0.2em]
      text-zinc-500
    "
  >
    ChemicalEngineeringHub.com
  </p>

  <h1
  className="
    text-2xl
    md:text-3xl
    font-bold
    tracking-tight
    leading-tight
    text-white
  "
>
  Learn Chemical Engineering{" "}
  <span className="text-emerald-400">
    Industry Way.
  </span>
</h1>

</div>



</section>

      </div>

    </main>
  );
}