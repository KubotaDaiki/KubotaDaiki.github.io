import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { AchievementListItem } from "./AchievementListItem";

export function AchievementList({ achievements }) {
  return (
    <List>
      {achievements.map((achievement) => (
        <ListItem key={achievement.sys.id} sx={{ px: { xs: 0, md: 2 } }}>
          <AchievementListItem achievement={achievement}></AchievementListItem>
        </ListItem>
      ))}
    </List>
  );
}
