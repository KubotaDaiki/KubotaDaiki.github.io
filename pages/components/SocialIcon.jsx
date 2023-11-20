import * as React from "react";
import { IconButton } from "@mui/material";
import Image from "next/image";

export default function SocialIcon({ href, imgUrl }) {
  return (
    <IconButton
      onClick={() => window.open(href)}
      sx={{
        "&:hover": {
          bgcolor: "accent.main",
        },
        bgcolor: "secondary.main",
        p: 2,
      }}
    >
      <Image src={imgUrl} width={24} height={24} alt="social icon"/>
    </IconButton>
  );
}
