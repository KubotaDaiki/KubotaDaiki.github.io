import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export function WorkCard({ work, onClick }) {
  return (
    <>
      <Card sx={{ aspectRatio: 1.7777777 }}>
        <CardActionArea onClick={onClick} sx={{ height: "100%" }}>
          <CardMedia
            sx={{ height: "100%" }}
            image={work.fields.img.fields.file.url}
          />
          <CardContent></CardContent>
        </CardActionArea>
      </Card>
      <Typography color="text.secondary" align="center" sx={{ mt: 1 }}>
        {work.fields.name}
      </Typography>
    </>
  );
}
