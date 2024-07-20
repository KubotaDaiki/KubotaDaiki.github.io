import { MobileDrawer } from ".";
import { fn } from "@storybook/test";

export default {
  component: MobileDrawer,
  title: "Header/MobileDrawer/MobileDrawer",
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
};

export const Default = {
  args: {
    mobileOpen: true,
    navItems: ["ホーム", "About", "Contact"],
  },
};
