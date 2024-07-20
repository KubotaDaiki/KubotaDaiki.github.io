import { MobileDrawer } from "./MobileDrawer";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";
import { MobileNavButton } from "./MobileNavButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";

export default {
  component: MobileDrawer,
  title: "Header/MobileDrawer",
  tags: ["autodocs"],
  args: {
    handleDrawerToggle: fn(),
  },
};

const navItems = ["ホーム", "About", "Contact"];

export const Default = {
  args: {
    mobileOpen: true,
    children: (
      <>
        <Toolbar />
        <Box onClick={fn()} sx={{ backgroundColor: "primary.main" }}>
          <List>
            {navItems?.map((item) => (
              <ListItem key={item} disablePadding>
                <MobileNavButton item={item}></MobileNavButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </>
    ),
  },
};
