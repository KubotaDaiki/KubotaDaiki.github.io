import Image from "next/image";
import { StarRating } from "./StarRating";

export function SkillCard({ skill, onClick }) {
  return (
    <button onClick={onClick} className="w-full">
      <div className="
          p-2.5
          flex items-center gap-4
          bg-[#ffffff] hover:bg-[#F3F4F6] transition duration-200
          shadow-md rounded relative z-10
      ">
        <Image
          src={skill.fields.icon.fields.file.url}
          width={42}
          height={42}
          alt="skillIcon"
          style={{
            filter:
              "invert(29%) sepia(19%) saturate(296%) hue-rotate(169deg) brightness(90%) contrast(84%)",
          }}
        ></Image>
        <p className="grow shrink text-start">{skill.fields.name}</p>
        <StarRating value={skill.fields.rank} />
      </div>
    </button>
  );
}
