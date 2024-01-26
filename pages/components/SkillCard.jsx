import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Image from "next/image";

export default function SkillCard({ iconUrl, text, rank, onClick }) {
  return (
    <Card sx={{ position: "relative", zIndex: 10 }}>
      <CardActionArea onClick={onClick}>
        <CardContent sx={{ padding: "10px" }}>
          <Stack
            spacing={2}
            direction={"row"}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={iconUrl}
              width={42}
              height={42}
              alt="skillIcon"
              style={{
                filter:
                  "invert(29%) sepia(19%) saturate(296%) hue-rotate(169deg) brightness(90%) contrast(84%)",
              }}
            ></Image>
            <ListItemText primary={text}></ListItemText>
            {rank && <Rating name="read-only" value={rank} readOnly />}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
