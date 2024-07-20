import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import CardDialog from "../CardDialog";

export function SkillCardDialog({ skill, open, onClose }) {
  return (
    <CardDialog open={open} handleClose={onClose} title={skill.fields.name}>
      <Stack spacing={2}>
        <Stack spacing={2} direction={"row"} alignItems="center">
          <Image
            src={skill.fields.icon.fields.file.url}
            width={42}
            height={42}
            alt="skillIcon"
            style={{
              filter:
                "invert(29%) sepia(19%) saturate(296%) hue-rotate(169deg) brightness(90%) contrast(84%)",
            }}
          ></Image>
          <Rating value={skill.fields.rank} readOnly />
        </Stack>
        <Typography
          variant="p"
          sx={{
            whiteSpace: "pre-wrap",
          }}
        >
          {skill.fields.detail}
        </Typography>
      </Stack>
    </CardDialog>
  );
}
