import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SocialIcon from "./SocialIcon";

export default function Footer({ footer }) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        height: "150px",
        width: "100%",
        backgroundColor: "secondary.main",
        position: "relative",
        zIndex: 10,
        marginTop: "150px",
      }}
    >
      <Stack spacing={3} direction="row">
        {footer?.fields.socialIcons.map((icon) => (
          <SocialIcon
            href={icon.fields.url}
            name={icon.fields.name}
            imgUrl={icon.fields.img.fields.file.url}
            key={icon.sys.id}
          />
        ))}
      </Stack>
      <Typography variant="p" sx={{ color: "white.main" }}>
        Email: kubotadaiki0654@gmail.com
      </Typography>
    </Stack>
  );
}
