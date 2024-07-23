import Image from "next/image";

export function SocialIcon({ href, imgUrl, name }) {
  return (
    <a
      href={href}
      className="
      bg-secondary hover:bg-accent transition duration-200
      p-4 rounded-full"
    >
      <Image src={imgUrl} width={24} height={24} alt={name} />
    </a>
  );
}
