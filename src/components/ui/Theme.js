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
      main: `${arcOrange}`
    },
    background: {
      default: grey["200"]
    }
  },
  typography: {
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
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5em",
      color: `${violet}`,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: violet
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.75em",
      color: `${violet}`
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
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
