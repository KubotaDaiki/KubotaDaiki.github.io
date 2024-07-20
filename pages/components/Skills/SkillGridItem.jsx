import { SkillCard } from "./SkillCard";
import { SkillCardDialog } from "./SkillCardDialog";
import { useState } from "react";

export function SkillGridItem({ skill }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SkillCard skill={skill} onClick={() => setOpen(true)}></SkillCard>
      <SkillCardDialog
        skill={skill}
        open={open}
        onClose={() => setOpen(false)}
      ></SkillCardDialog>
    </>
  );
}
