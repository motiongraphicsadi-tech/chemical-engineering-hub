import CategoryCard from "./CategoryCard";
import { homepageCategories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="mt-24">

      <h2 className="text-3xl font-bold text-white">
        Explore by Category
      </h2>

      <p className="mt-2 text-zinc-400">
        Choose your learning path.
      </p>

      <div
        className="
          mt-8
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {homepageCategories.map((category) => (
          <CategoryCard
            key={category.name}
            {...category}
          />
        ))}
      </div>
    </section>
  );
}