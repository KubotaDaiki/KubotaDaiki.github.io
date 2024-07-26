import { SkillGridItem } from "./SkillGridItem";

export function SkillGrid({ skills }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
      {skills.fields.skills.map((skill) => (
        <div key={skill.sys.id}>
          <SkillGridItem skill={skill}></SkillGridItem>
        </div>
      ))}
    </div>
  );
}