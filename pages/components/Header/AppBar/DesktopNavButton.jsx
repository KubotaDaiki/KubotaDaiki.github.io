import Button from "@mui/material/Button";

export function DesktopNavButton({ item }) {
  return (
    <Button
      sx={{
        color: "white.main",
        "&:hover": {
          backgroundColor: "accent.main",
        },
      }}
      href={"#" + item}
    >
      {item}
    </Button>
  );
}
