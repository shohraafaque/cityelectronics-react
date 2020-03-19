import React from "react";
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import footerAdorment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyle = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    zIndex: 1302,
    position: "relative",
    marginTop: "3em"
    // bottom: 0
  },
  footerAdornment: {
    verticalAlign: "bottom",
    width: "25em",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainGridContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    font: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("md")]: {
      width: "2.5em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "1em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("md")]: {
      right: "0.6em"
    }
  }
}));

export default function Footer(props) {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.mainGridContainer} justify="center">
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Services
              </Grid>
              <Grid item className={classes.link}>
                Custom Software Development
              </Grid>
              <Grid item className={classes.link}>
                iOS/Android App Delevelopment
              </Grid>
              <Grid item className={classes.link}>
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                The Revolution
              </Grid>
              <Grid item className={classes.link}>
                Vision
              </Grid>
              <Grid item className={classes.link}>
                Technology
              </Grid>
              <Grid item className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                About Us
              </Grid>
              <Grid item className={classes.link}>
                History
              </Grid>
              <Grid item className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img alt="" src={footerAdorment} className={classes.footerAdornment} />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}>
        <Grid item component={"a"} href="/">
          <img
            alt="facebook"
            src={facebook}
            className={classes.icon}
            rel="noopener noreferrer"
            target="_blank"></img>
        </Grid>
        <Grid item component={"a"} href="/">
          <img
            alt="twitter"
            src={twitter}
            className={classes.icon}
            rel="noopener noreferrer"
            target="_blank"></img>
        </Grid>
        <Grid item component={"a"} href="/">
          <img
            alt="instagram"
            src={instagram}
            className={classes.icon}
            rel="noopener noreferrer"
            target="_blank"></img>
        </Grid>
      </Grid>
    </footer>
  );
}
