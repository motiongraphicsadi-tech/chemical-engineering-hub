type Props = {
    title: string;
    description: string;
  };
  
  export default function TopicHero({
    title,
    description,
  }: Props) {
    return (
  
      <section className="mb-14">
  
        {/* Topic title */}
        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            tracking-tight
            text-white
          "
        >
          {title}
        </h1>
  
        {/* Topic description */}
        <p
          className="
            mt-5
            text-lg
            text-gray-400
            leading-8
            max-w-3xl
          "
        >
          {description}
        </p>
  
      </section>
    );
  }