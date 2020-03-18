import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Theme from "./components/ui/Theme";
import MainAppbar from "./components/ui/MainAppbar";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <MainAppbar />
      </ThemeProvider>
    );
  }
}

export default App;
