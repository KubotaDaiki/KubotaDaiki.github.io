import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans JP"', "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#282828",
    },
    secondary: {
      main: "#495057",
    },
    accent: {
      main: "#6283C2",
    },
    white: {
      main: "#eeeeee",
    },
  },
});
