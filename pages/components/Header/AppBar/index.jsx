import MUIAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { HamburgerButton } from "./HamburgerButton";
import { Title } from "./Title";
import { DesktopNavList } from "./DesktopNavList";

export function AppBar({ navItems, onMenuButtonClick }) {
  return (
    <MUIAppBar
      component="nav"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      elevation={0}
    >
      <Toolbar>
        <Title>Portfolio</Title>
        <DesktopNavList navItems={navItems}></DesktopNavList>
        <HamburgerButton
          handleDrawerToggle={onMenuButtonClick}
        ></HamburgerButton>
      </Toolbar>
    </MUIAppBar>
  );
}
