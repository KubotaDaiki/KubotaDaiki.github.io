import { WorkGridItem } from "./WorkGridItem";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const works = contentfulFilter(data, "work");

export default {
  component: WorkGridItem,
  title: "Works/WorkGridItem",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    work: works[0],
  },
};
