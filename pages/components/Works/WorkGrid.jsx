import Grid from "@mui/material/Unstable_Grid2";
import { WorkGridItem } from "./WorkGridItem";

export function WorkGrid({ works }) {
  return (
    <Grid
      container
      spacing={3}
      columns={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        width: "100%",
      }}
    >
      {works.map((work) => {
        return (
          <Grid xs={1} key={work.sys.id}>
            <WorkGridItem work={work}></WorkGridItem>
          </Grid>
        );
      })}
    </Grid>
  );
}
