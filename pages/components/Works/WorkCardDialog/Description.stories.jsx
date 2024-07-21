import { Description } from "./Description";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const works = contentfulFilter(data, "work");

export default {
  component: Description,
  title: "Works/WorkCardDialog/Description",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: works[0].fields.description,
  },
};
