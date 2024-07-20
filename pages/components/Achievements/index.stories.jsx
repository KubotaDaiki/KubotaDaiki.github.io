import { Achievements } from ".";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const achievements = contentfulFilter(data, "achievement");

export default {
  component: Achievements,
  title: "Achievements/Achievements",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    achievements: achievements,
  },
};
