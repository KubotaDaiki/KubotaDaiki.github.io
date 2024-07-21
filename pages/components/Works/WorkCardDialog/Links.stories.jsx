import { Links } from "./Links";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const works = contentfulFilter(data, "work");

export default {
  component: Links,
  title: "Works/WorkCardDialog/Links",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    work: works[0],
  },
};
