import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

export function SocialIcon({ href, imgUrl, name }) {
  return (
    <Tooltip title={name}>
      <IconButton
        href={href}
        sx={{
          "&:hover": {
            bgcolor: "accent.main",
          },
          bgcolor: "secondary.main",
          p: 2,
        }}
      >
        <Image src={imgUrl} width={24} height={24} alt={name} />
      </IconButton>
    </Tooltip>
  );
}
