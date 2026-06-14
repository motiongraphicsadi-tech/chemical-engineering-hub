import Image from "next/image";

type Props = {
  image: string;
  alt?: string;
};

export default function DiagramBox({
  image,
  alt,
}: Props) {
  return (
    <div className="my-8 flex justify-center">

  <Image
    src={image}
    alt={alt || ""}
    width={1200}
    height={700}
    sizes="(max-width: 768px) 100vw, 900px"
    className="
      w-full
      max-w-1xl
      h-auto
      rounded-3xl
      shadow-lg
    "
  />

</div>
  );
}