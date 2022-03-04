import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Josefin Sans ",
    h1: {
      fontSize: "53px",
      lineHeight: "81.98px",
      letterSpacing: ".015em",
      fontWeight: "600",
    },
    h2: {
      fontSize: "42px",
      lineHeight: "49.22px",
      letterSpacing: ".015em",
    },
    h3: {
      fontSize: "35px",
      lineHeight: "46.2px",
      letterSpacing: ".015em",
    },
    h4: {
      fontSize: "34px",
      fontWeight: "700",
      lineHeight: "34px",
      "@media (max-width:750px)": {
        fontSize: "20px",
        fontWeight: "500",
      },
    },
    h5: {
      fontSize: "26px",
      fontWeight: "600",
      lineHeight: "26px",
    },
    subtitle1: {
      fontSize: "16px",
      fontFamily: "lato",
      lineHeight: "20px",
    },
    subtitle2: {
      fontSize: "22px",
      lineHeight: "25.78px",
    },
    body1: {
      fontSize: "18px",
      fontFamily: "lato",
      fontWeight: "400",
      lineHeight: "21.6px",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "18.75px",
    },
  },
  palette: {
    primary: {
      main: "#FDFCFE",
    },
    secondary: {
      main: "#151875",
    },
  },
});

export default theme;
