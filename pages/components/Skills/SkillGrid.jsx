import Grid from "@mui/material/Unstable_Grid2";
import { SkillGridItem } from "./SkillGridItem";

export function SkillGrid({ skills }) {
  return (
    <Grid
      container
      columns={{ xs: 1, md: 2 }}
      spacing={2}
      sx={{ maxWidth: "800px" }}
    >
      {skills.fields.skills.map((skill) => (
        <Grid xs={1} key={skill.sys.id}>
          <SkillGridItem skill={skill}></SkillGridItem>
        </Grid>
      ))}
    </Grid>
  );
}
