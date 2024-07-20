import Section from "../Section";
import { SkillGrid } from "./SkillGrid";

export function Skills({ skills }) {
  return (
    <Section name="スキル">
      <SkillGrid skills={skills}></SkillGrid>
    </Section>
  );
}
