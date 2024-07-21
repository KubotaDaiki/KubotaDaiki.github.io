import Typography from "@mui/material/Typography";

export function Email({ children }) {
  return (
    <Typography variant="p" sx={{ color: "white.main" }}>
      {children}
    </Typography>
  );
}
