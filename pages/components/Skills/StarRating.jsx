import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

export function StarRating({ value, count = 5 }) {
  return (
    <div className="flex">
      {[...Array(count)].map((_, i) => {
        if (i < value) {
          return <IoMdStar key={i} size={24} color={'#fda93b'} />
        } else {
          return <IoMdStarOutline key={i} size={24} color={'#b6b6b6'} />
        };
      })}
    </div>
  )
};