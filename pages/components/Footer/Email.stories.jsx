import { Email } from "./Email";

export default {
  component: Email,
  title: "Footer/Email",
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Default = {
  args: {
    children: "Email:sample@gmail.com",
  },
};
