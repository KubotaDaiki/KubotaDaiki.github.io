import { SocialIconList } from "./SocialIconList";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const footer = contentfulFilter(data, "footer")[0];

export default {
  component: SocialIconList,
  title: "Footer/SocialIconList",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    socialIcons: footer.fields.socialIcons,
  },
};
