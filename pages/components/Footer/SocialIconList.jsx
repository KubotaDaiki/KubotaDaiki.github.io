import { SocialIcon } from "./SocialIcon";

export function SocialIconList({ socialIcons }) {
  return (
    <div className="flex gap-4">
      {socialIcons.map((icon) => (
        <SocialIcon
          href={icon.fields.url}
          name={icon.fields.name}
          imgUrl={icon.fields.img.fields.file.url}
          key={icon.sys.id}
        />
      ))}
    </div>
  );
}
