import Typography from "@mui/material/Typography";

export function Description({ children }) {
  return (
    <Typography variant="p" component="div" sx={{ whiteSpace: "pre-wrap" }}>
      {children}
    </Typography>
  );
}
