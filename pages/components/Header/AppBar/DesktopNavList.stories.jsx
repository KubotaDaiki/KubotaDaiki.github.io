import { DesktopNavList } from "./DesktopNavList";

export default {
  component: DesktopNavList,
  title: "Header/AppBar/DesktopNavList",
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Default = {
  args: {
    navItems: ["ホーム", "About", "Contact"],
  },
};
