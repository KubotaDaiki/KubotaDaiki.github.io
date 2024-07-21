import Section from "../Section";
import { WorkGrid } from "./WorkGrid";

export function Works({ works }) {
  return (
    <Section name="制作物">
      <WorkGrid works={works}></WorkGrid>
    </Section>
  );
}
