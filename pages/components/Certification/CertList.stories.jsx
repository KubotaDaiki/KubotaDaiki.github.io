import { CertList } from "./CertList";
import { client } from "@/libs/client";
import { contentfulFilter } from "@/libs/contentfulFilter";

const data = await client.getEntries().catch((err) => console.log(err));
const certification = contentfulFilter(data, "certification");

export default {
  component: CertList,
  title: "Certification/CertList",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    certification: certification,
  },
};
