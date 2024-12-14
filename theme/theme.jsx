import { createTheme } from "@mui/material";

import colors from "./colors";

const theme = createTheme({
  typography: {
    fontFamily: "Inter-Light",
    fontSize: 14,
    h1: {
      fontFamily: "NewYok",
      fontSize: "100px",
      fontWeight: 400,
    },
    h2: {
      fontFamily: "NewYok",
      fontSize: "65px",
      fontWeight: 400,
    },
    h3: {
      fontFamily: "NewYok",
      fontSize: "50px",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "Inter-Light",
      fontSize: "30px",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "Inter-Light",
      fontSize: "24px",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "Inter-Light",
      fontSize: "20px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
  },
//   palette: {
//     primary: {
//       main: colors.blue.main,
//       light: colors.blue.light,
//       dark: colors.blue.dark,
//     },
//     error: {
//       main: colors.red.main,
//       light: colors.red.light,
//     },
//   },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Inter-Light",
        },
      },
    },
  },
});

export default theme;
