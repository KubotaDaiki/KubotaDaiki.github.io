import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function HamburgerButton({ handleDrawerToggle }) {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{
        display: {
          sm: "none",
        },
      }}
    >
      <MenuIcon />
    </IconButton>
  );
}
