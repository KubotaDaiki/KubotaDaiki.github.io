import { WorkGrid } from "./WorkGrid";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const works = contentfulFilter(data, "work");

export default {
  component: WorkGrid,
  title: "Works/WorkGrid",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    works: works,
  },
};
