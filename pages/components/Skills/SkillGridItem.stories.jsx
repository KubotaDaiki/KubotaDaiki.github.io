import { SkillGridItem } from "./SkillGridItem";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const skills = contentfulFilter(data, "skills")[0];

export default {
  component: SkillGridItem,
  title: "Skills/SkillGridItem",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    skill: skills.fields.skills[0],
  },
};