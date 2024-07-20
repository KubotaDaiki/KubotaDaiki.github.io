import Typography from "@mui/material/Typography";

export function Title({ children }) {
  return (
    <Typography
      variant="h6"
      sx={{
        flexGrow: 1,
      }}
    >
      {children}
    </Typography>
  );
}
