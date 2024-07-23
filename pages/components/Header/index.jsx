import { AppBar } from "./AppBar";

export default function Header({ navItems }) {
  return (
    <>
      <AppBar navItems={navItems}></AppBar>
    </>
  );
}
