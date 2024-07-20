import Section from "../Section";
import { AchievementList } from "./AchievementList";

export function Achievements({ achievements }) {
  return (
    <Section name="実績">
      <AchievementList achievements={achievements}></AchievementList>
    </Section>
  );
}
