import { Title } from "./Title";
import { DesktopNavList } from "./DesktopNavList";
import { MobileDrawer } from "../MobileDrawer";

export function AppBar({ navItems }) {
  return (
    <header className="
      w-full h-16 px-6
      flex justify-between items-center
      bg-primary
      fixed top-0
      z-[100]
    ">
      <Title>Portfolio</Title>
      <DesktopNavList navItems={navItems}></DesktopNavList>
      <MobileDrawer navItems={navItems}></MobileDrawer>
    </header>
  );
}