import Stack from "@mui/material/Stack";
import { SocialIconList } from "./SocialIconList";
import { Email } from "./Email";

export function Footer({ footer }) {
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
      <SocialIconList socialIcons={footer.fields.socialIcons}></SocialIconList>
      <Email>Email: kubotadaiki0654@gmail.com</Email>
    </Stack>
  );
}
