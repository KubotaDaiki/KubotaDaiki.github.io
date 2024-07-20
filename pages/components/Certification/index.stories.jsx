import { Certification } from ".";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const certification = contentfulFilter(data, "certification");

export default {
  component: Certification,
  title: "Certification/Certification",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    certification: certification,
  },
};
