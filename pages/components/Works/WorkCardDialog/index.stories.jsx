import { WorkCardDialog } from ".";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";
import { fn } from "@storybook/test";

const data = await client.getEntries().catch((err) => console.log(err));
const works = contentfulFilter(data, "work");

export default {
  component: WorkCardDialog,
  title: "Works/WorkCardDialog/WorkCardDialog",
  tags: ["autodocs"],
  args: {
    onClose: fn(),
  },
};

export const Default = {
  args: {
    open: true,
    work: works[0],
  },
};
