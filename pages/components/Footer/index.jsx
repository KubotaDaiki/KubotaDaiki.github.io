import { SocialIconList } from "./SocialIconList";
import { Email } from "./Email";

export function Footer({ footer }) {
  return (
    <div className="
        flex flex-col justify-center items-center gap-4
        h-36 w-full mt-24
        bg-secondary
        relative z-10
      ">
      <SocialIconList socialIcons={footer.fields.socialIcons}></SocialIconList>
      <Email>Email: kubotadaiki0654@gmail.com</Email>
    </div>
  );
}