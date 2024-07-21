import { Footer } from ".";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const footer = contentfulFilter(data, "footer")[0];

export default {
  component: Footer,
  title: "Footer/Footer",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    footer: footer,
  },
};