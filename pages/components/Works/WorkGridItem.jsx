import { useState } from "react";
import { WorkCard } from "./WorkCard";
import { WorkCardDialog } from "./WorkCardDialog";

export function WorkGridItem({ work }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <WorkCard work={work} onClick={() => setOpen(true)}></WorkCard>
      <WorkCardDialog
        work={work}
        open={open}
        onClose={() => setOpen(false)}
      ></WorkCardDialog>
    </>
  );
}
