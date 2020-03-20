import { createMuiTheme } from "@material-ui/core/styles";

const violet = "rgb(115, 103, 240)";
const arcOrange = "#FFBA60";
const greyShade = "#f7f7f7";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${violet}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${violet}`
    },
    secondary: {
      main: "#000000"
    },
    background: {
      default: greyShade
    }
  },
  typography: {
    fontFamily: "Montserrat",
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1em"
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontSize: "1rem",
      color: "white"
    },
    learnButton: {
      borderColor: violet,
      color: violet,
      borderRadius: 50,
      textTransform: "none",
      fontFamily: "Roberto",
      fontWeight: "bold"
    }
  }
});
