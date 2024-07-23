import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
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
