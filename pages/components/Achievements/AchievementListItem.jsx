import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export function AchievementListItem({ achievement }) {
  return (
    <>
      <Box sx={{ mr: 1 }}>
        <Image
          src={`https:${achievement.fields.icon.fields.file.url}`}
          width={20}
          height={20}
          alt="achievement"
        ></Image>
      </Box>
      <Typography variant="p">{achievement.fields.name}</Typography>
    </>
  );
}
