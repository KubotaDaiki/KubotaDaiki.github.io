import { WorkGridItem } from "./WorkGridItem";

export function WorkGrid({ works }) {
  return (
    <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      w-[90vw] sm:w-[80vw] md:w-[70vw]
      ">
      {works.map((work) => {
        return (
          <div className="p-3" key={work.sys.id}>
            <WorkGridItem work={work}></WorkGridItem>
          </div>
        );
      })}
    </div>
  );
}