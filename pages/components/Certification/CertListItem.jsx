import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export function CertListItem({ cert }) {
  return (
    <>
      <Box sx={{ mr: 1 }}>
        <Image
          src={cert.fields.icon.fields.file.url}
          width={15}
          height={15}
          alt="check"
        ></Image>
      </Box>
      <Typography variant="p">{cert.fields.name}</Typography>
    </>
  );
}
