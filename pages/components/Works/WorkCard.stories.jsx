import { WorkCard } from "./WorkCard";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";
import { fn } from "@storybook/test";

const data = await client.getEntries().catch((err) => console.log(err));
const works = contentfulFilter(data, "work");

export default {
  component: WorkCard,
  title: "Works/WorkCard",
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
};

export const Default = {
  args: {
    work: works[0],
  },
};
