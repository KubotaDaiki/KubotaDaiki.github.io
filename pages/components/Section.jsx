import * as React from "react";
import { Divider, Typography, Box } from "@mui/material";

export default function Section({ children, id, height = "auto" }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: height,
          paddingTop: 10,
          paddingBottom: 15,
          paddingLeft: 4,
          paddingRight: 4,
        }}
        id={id}
      >
        {children}
      </Box>
      <Divider />
    </>
  );
}
