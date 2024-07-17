import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { DesktopNavButton } from "./DesktopNavButton";
import { MobileNavButton } from "./MobileNavButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { HamburgerButton } from "./HamburgerButton";
import { MobileDrawer } from "./MobileDrawer";

export default function Header({ navItems }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar
        component="nav"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems?.map((item) => (
              <DesktopNavButton key={item} item={item}></DesktopNavButton>
            ))}
          </Box>
          <HamburgerButton
            handleDrawerToggle={handleDrawerToggle}
          ></HamburgerButton>
        </Toolbar>
      </AppBar>
      <MobileDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      >
        <Toolbar />
        <Box
          onClick={handleDrawerToggle}
          sx={{ backgroundColor: "primary.main" }}
        >
          <List>
            {navItems?.map((item) => (
              <ListItem key={item} disablePadding>
                <MobileNavButton item={item}></MobileNavButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MobileDrawer>
    </>
  );
}
