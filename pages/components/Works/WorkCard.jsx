import Image from "next/image";

export function WorkCard({ work, onClick }) {
  return (
    <div>
      <button className="relative w-full aspect-video shadow-md" onClick={onClick}>
        <Image
          src={`https:${work.fields.img.fields.file.url}`}
          className="
            object-cover rounded
            hover:brightness-95 transition duration-200
          "
          sizes="50vw"
          fill
          alt={work.fields.name + "のイメージ画像"}
        />
      </button>
      <p className="text-secondary mt-1 text-center">
        {work.fields.name}
      </p>
    </div>
  );
}