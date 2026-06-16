import Link from "next/link";

interface TopicNavigationProps {
  items: string[];
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function TopicNavigation({
  items,
}: TopicNavigationProps) {
  return (
    <div className="my-8 rounded-xl border p-6">
      <h2 className="mb-4 text-xl font-semibold">
        In This Topic
      </h2>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <Link
              href={`#${slugify(item)}`}
              className="text-blue-600 hover:underline"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}