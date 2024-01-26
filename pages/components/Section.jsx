import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Section({ children, name }) {
  return (
    <>
      <Toolbar id={name} />
      <Stack
        alignItems="center"
        spacing={2}
        sx={{ marginY: "50px", width: { xs: "90%", sm: "80%", md: "70%" } }}
      >
        <Typography variant="h2" sx={{ fontSize: 48 }}>
          {name}
        </Typography>
        {children}
      </Stack>
    </>
  );
}
