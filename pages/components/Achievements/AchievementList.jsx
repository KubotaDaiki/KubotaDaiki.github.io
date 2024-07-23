import { AchievementListItem } from "./AchievementListItem";

export function AchievementList({ achievements }) {
  return (
    <ul className="flex flex-col gap-4 pt-2">
      {achievements.map((achievement) => (
        <li key={achievement.sys.id}>
          <AchievementListItem achievement={achievement}></AchievementListItem>
        </li>
      ))}
    </ul>
  );
}
