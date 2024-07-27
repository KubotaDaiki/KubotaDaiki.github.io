import Image from "next/image";

export function CertListItem({ cert }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={cert.fields.icon.fields.file.url}
        width={15}
        height={15}
        alt=""
      ></Image>
      <p>{cert.fields.name}</p>
    </div>
  );
}
