import { AchievementList } from "./AchievementList";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const achievements = contentfulFilter(data, "achievement");

export default {
  component: AchievementList,
  title: "Achievements/AchievementList",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    achievements: achievements,
  },
};
