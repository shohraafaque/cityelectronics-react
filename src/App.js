import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Theme from "./components/ui/Theme";
import MainAppbar from "./components/ui/MainAppbar";
import { CssBaseline } from "@material-ui/core";
import Footer from "./components/ui/Footer";
import DetailPage from "./components/DetailPage";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <MainAppbar />
        <DetailPage />
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
