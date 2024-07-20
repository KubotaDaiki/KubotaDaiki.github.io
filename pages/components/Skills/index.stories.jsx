import { Skills } from ".";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const skills = contentfulFilter(data, "skills")[0];

export default {
  component: Skills,
  title: "Skills/Skills",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    skills: skills,
  },
};