import { SkillCardDialog } from "./SkillCardDialog";
import { fn } from "@storybook/test";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const skills = contentfulFilter(data, "skills")[0];

export default {
  component: SkillCardDialog,
  title: "Skills/SkillCardDialog",
  tags: ["autodocs"],
  args: {
    onClose: fn(),
  },
};

export const Default = {
  args: {
    open: true,
    skill: skills.fields.skills[0],
  },
};
