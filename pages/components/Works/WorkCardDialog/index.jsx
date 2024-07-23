import Image from "next/image";
import CardDialog from "../../CardDialog";
import { Links } from "./Links";
import { Description } from "./Description";
import { TechnologyStack } from "./TechnologyStack";

export function WorkCardDialog({ work, open, onClose }) {
  return (
    <CardDialog open={open} handleClose={onClose} title={work.fields.name}>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <Image
            src={`https:${work.fields.img.fields.file.url}`}
            alt="works"
            width={1920}
            height={1080}
            className="w-full h-auto border-2 border-[#eeeeee]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Description>{work.fields.description}</Description>
          <TechnologyStack technologyStack={work.fields.technologyStack} />
          <Links work={work}></Links>
        </div>
      </div>
    </CardDialog>
  );
}


// <CardDialog open={open} handleClose={onClose} title={work.fields.name}>
// <Grid container spacing={2} direction="row" columns={{ xs: 1, md: 2 }}>
//   <Grid xs={1}>
//     <Image
//       src={`https:${work.fields.img.fields.file.url}`}
//       alt="works"
//       width={1920}
//       height={1080}
//       style={{
//         width: "100%",
//         height: "auto",
//         border: "solid 2px #eeeeee",
//       }}
//     />
//   </Grid>
//   <Grid xs={1}>
//     <Stack spacing={3}>
//       <Description>{work.fields.description}</Description>
//       <TechnologyStack technologyStack={work.fields.technologyStack} />
//       <Links work={work}></Links>
//     </Stack>
//   </Grid>
// </Grid>
// </CardDialog>