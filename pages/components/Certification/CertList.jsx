import { CertListItem } from "./CertListItem";

export function CertList({ certification }) {
  return (
    <ul className="flex flex-col gap-4 pt-2">
      {certification.map((cert) => (
        <li key={cert.sys.id}>
          <CertListItem cert={cert}></CertListItem>
        </li>
      ))}
    </ul>
  );
}