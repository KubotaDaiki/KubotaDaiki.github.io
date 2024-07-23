import Image from "next/image";

export function Top() {
  return (
    <div
      className="
        w-full h-screen
        flex flex-col sm:flex-row items-center justify-center gap-8
        bg-primary
      "
      id="トップ"
    >
      <div>
        <p className="text-white pl-1 animate-fadeInAnime">
          UNIVERSITY STUDENT
        </p>
        <h1 className="text-white text-[5rem] leading-none animate-fadeInAnime">
          KUBOTA
        </h1>
      </div>
      <div className="relative w-40 md:w-52 h-40 md:h-52 animate-fadeInAnime">
        <Image
          src="/profile.png"
          className="object-cover rounded-full"
          alt="profile-image"
          sizes="50vw"
          fill
        />
      </div>
    </div>
  );
}