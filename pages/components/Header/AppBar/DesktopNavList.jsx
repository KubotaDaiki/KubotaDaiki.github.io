import Box from "@mui/material/Box";
import { DesktopNavButton } from "./DesktopNavButton";

export function DesktopNavList(props) {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      {props.navItems?.map((item) => (
        <DesktopNavButton key={item} item={item}></DesktopNavButton>
      ))}
    </Box>
  );
}
