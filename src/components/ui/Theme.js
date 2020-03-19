import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const violet = "rgb(115, 103, 240)";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

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
      default: grey["200"]
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
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300
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
