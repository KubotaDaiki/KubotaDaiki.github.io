import Section from "../Section";
import { CertList } from "./CertList";

export function Certification({ certification }) {
  return (
    <Section name="資格">
      <CertList certification={certification}></CertList>
    </Section>
  );
}
