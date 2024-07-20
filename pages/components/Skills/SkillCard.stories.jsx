import { SkillCard } from "./SkillCard";
import { fn } from "@storybook/test";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const skills = contentfulFilter(data, "skills")[0];

export default {
  component: SkillCard,
  title: "Skills/SkillCard",
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
};

export const Default = {
  args: {
    skill: skills.fields.skills[0],
  },
};
