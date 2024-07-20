import { CertListItem } from "./CertListItem";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const certification = contentfulFilter(data, "certification");

export default {
  component: CertListItem,
  title: "Certification/CertListItem",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    cert: certification[0],
  },
};
