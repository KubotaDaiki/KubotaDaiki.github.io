import { useState } from "react";
import { MobileDrawer } from "./MobileDrawer";
import { AppBar } from "./AppBar";

export default function Header({ navItems }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar
        navItems={navItems}
        onMenuButtonClick={handleDrawerToggle}
      ></AppBar>
      <MobileDrawer
        mobileOpen={mobileOpen}
        onClick={handleDrawerToggle}
        navItems={navItems}
      ></MobileDrawer>
    </>
  );
}
