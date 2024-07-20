
import { SkillGrid } from "./SkillGrid";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const skills = contentfulFilter(data, "skills")[0];


export default {
  component: SkillGrid,
  title: "Skills/SkillGrid",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    skills: skills,
  },
};