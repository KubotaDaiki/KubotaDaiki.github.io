import { StarRating } from "./StarRating";
import Image from "next/image";
import CardDialog from "../CardDialog";

export function SkillCardDialog({ skill, open, onClose }) {
  return (
    <CardDialog open={open} handleClose={onClose} title={skill.fields.name}>
      <div className="pb-4 flex items-center gap-4">
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
        <StarRating value={skill.fields.rank} />
      </div>
      <p className="whitespace-pre-wrap">{skill.fields.detail}</p>
    </CardDialog>
  );
}