export function DesktopNavButton({ item }) {
  return (
    <a
      className="
        w-16 h-9 py-1.5 px-2
        flex justify-center items-center
        text-white hover:bg-accent
        text-sm rounded transition
      "
      href={"#" + item}
    >
      {item}
    </a>
  );
}