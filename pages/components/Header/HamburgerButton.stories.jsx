import { HamburgerButton } from "./HamburgerButton";
import { fn } from "@storybook/test";

export default {
  component: HamburgerButton,
  title: "Header/HamburgerButton",
  tags: ["autodocs"],
  args: {
    handleDrawerToggle: fn(),
  },
};

export const Default = {};
