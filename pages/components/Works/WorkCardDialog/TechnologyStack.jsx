import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

export function TechnologyStack({ technologyStack }) {
  return (
    <div>
      <p className="mb-2">
        使用技術
      </p>
      <div className="flex gap-x-1 gap-y-2 flex-wrap">
        {technologyStack?.map((t) => {
          return (
            <p key={t} className="text-sm px-2 py-0.5 rounded-xl bg-[#ebebeb]">{t}</p>
          );
        })}
      </div>
    </div>
  );
}
