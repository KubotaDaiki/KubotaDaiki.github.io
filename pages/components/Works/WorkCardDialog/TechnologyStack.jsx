import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

export function TechnologyStack({ technologyStack }) {
  return (
    <Box>
      <Typography variant="p" component="div" sx={{ marginBottom: "5px" }}>
        使用技術
      </Typography>
      <Grid container spacing={0.5}>
        {technologyStack?.map((t) => {
          return (
            <Grid key={t}>
              <Chip label={t} size="small" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
