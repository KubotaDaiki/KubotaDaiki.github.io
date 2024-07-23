import { DesktopNavButton } from "./DesktopNavButton";

export function DesktopNavList(props) {
  return (
    <div className="hidden sm:flex">
      {props.navItems?.map((item) => (
        <DesktopNavButton key={item} item={item}></DesktopNavButton>
      ))}
    </div>
  );
}
