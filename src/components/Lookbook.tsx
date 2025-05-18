import Image from "next/image";

const LOOKS = [
  "/images/look1.png",
  "/images/look2.png",
  "/images/look3.png",
  "/images/look4.png",
] as const;

export default function Lookbook() {
  return (
    <section className="overflow-x-auto whitespace-nowrap py-12">
      {LOOKS.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={320}
          height={200}
          className="mr-4 inline-block rounded-lg object-cover"
          sizes="(min-width:1024px) 25vw, 80vw"
        />
      ))}
    </section>
  );
}
