import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function Top() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      id="トップ"
      sx={{ height: "100vh", width: "100%", backgroundColor: "primary.main" }}
    >
      <Box sx={{ width: "302px" }}>
        <Typography
          variant="p"
          sx={{ color: "white.main", paddingLeft: "5px" }}
          className="fadeIn"
        >
          UNIVERSITY STUDENT
        </Typography>
        <Typography
          variant="h1"
          sx={{ color: "white.main", fontSize: 80 }}
          className="fadeIn"
        >
          KUBOTA
        </Typography>
      </Box>
      <Avatar
        src="/profile.png"
        sx={{
          width: { xs: 150, md: 200 },
          height: { xs: 150, md: 200 },
        }}
        className="fadeIn"
      />
    </Stack>
  );
}
