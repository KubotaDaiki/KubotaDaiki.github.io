import { AppBar } from ".";
import { fn } from "@storybook/test";

export default {
  component: AppBar,
  title: "Header/AppBar/AppBar",
  tags: ["autodocs"],
  args: {
    onMenuButtonClick: fn(),
  },
};

export const Default = {
  args: {
    navItems: ["ホーム", "About", "Contact"],
  },
};
