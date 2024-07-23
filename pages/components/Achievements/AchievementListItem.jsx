import Image from "next/image";

export function AchievementListItem({ achievement }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={`https:${achievement.fields.icon.fields.file.url}`}
        width={20}
        height={20}
        alt="achievement"
      ></Image>
      <p>{achievement.fields.name}</p>
    </div>
  );
}
