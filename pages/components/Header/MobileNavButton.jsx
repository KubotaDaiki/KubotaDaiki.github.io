import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export function MobileNavButton({ item }) {
  return (
    <ListItemButton
      sx={{
        textAlign: "center",
        "&:hover": {
          backgroundColor: "accent.main",
        },
        color: "white.main",
      }}
      href={"#" + item}
    >
      <ListItemText primary={item} />
    </ListItemButton>
  );
}
