import { AchievementListItem } from "./AchievementListItem";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const achievements = contentfulFilter(data, "achievement");

export default {
  component: AchievementListItem,
  title: "Achievements/AchievementListItem",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    achievement: achievements[0],
  },
};
