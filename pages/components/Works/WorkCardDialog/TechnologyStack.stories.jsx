import { TechnologyStack } from "./TechnologyStack";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const works = contentfulFilter(data, "work");

export default {
  component: TechnologyStack,
  title: "Works/WorkCardDialog/TechnologyStack",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    technologyStack: works[0].fields.technologyStack,
  },
};
