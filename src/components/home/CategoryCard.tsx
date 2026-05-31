import Link from "next/link";

interface Props {
  name: string;
  description: string;
  href: string;
  icon: string;
}

export default function CategoryCard({
  name,
  description,
  href,
  icon,
}: Props) {
  return (
    <Link
      href={href}
      className="
        group
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-950
        p-6
        transition-all
        duration-200
        hover:border-emerald-500
        hover:-translate-y-1
      "
    >
      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {name}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </Link>
  );
}