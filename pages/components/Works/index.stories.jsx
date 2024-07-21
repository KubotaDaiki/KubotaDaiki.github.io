import { Works } from ".";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const works = contentfulFilter(data, "work");

export default {
  component: Works,
  title: "Works/Works",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    works: works,
  },
};
