import Stack from "@mui/material/Stack";
import { SocialIcon } from "./SocialIcon";

export function SocialIconList({ socialIcons }) {
  return (
    <Stack spacing={3} direction="row">
      {socialIcons.map((icon) => (
        <SocialIcon
          href={icon.fields.url}
          name={icon.fields.name}
          imgUrl={icon.fields.img.fields.file.url}
          key={icon.sys.id}
        />
      ))}
    </Stack>
  );
}
