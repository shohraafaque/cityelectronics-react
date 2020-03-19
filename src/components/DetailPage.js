import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ProductImageGallary from "./ui/ProductImageGallary";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grid: {
    width: "100%",
    paddingLeft: "17em",
    paddingRight: "17em",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  primaryPriceBlock: {
    paddingRight: "0.5em",
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.primary,
    minHeight: "36em"
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%"
  }
}));

export default function DetailPage() {
  const classes = useStyle();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container justify="center">
          {/* Product Images*/}
          <Grid spacing={4} justify="center" container className={classes.grid}>
            <Grid
              item
              xs={12}
              md={5}
              style={{ top: 0, position: "sticky", height: "25em" }}>
              <Paper className={classes.paper}>
                <ProductImageGallary />
              </Paper>
            </Grid>

            {/* Left Block */}
            <Grid item container direction="column" xs={12} md={7} spacing={1}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Grid container direction="column">
                    {/* Title */}
                    <Grid item style={{ paddingBottom: "15px" }}>
                      <Typography
                        color="secondary"
                        variant="h6"
                        style={{ marginBottom: 0, fontWeight: "bold" }}
                        gutterBottom>
                        Realme 6 (Comet Blue, 64 GB) (4 GB RAM)
                      </Typography>
                      <Typography variant="subtitle2">by Realme</Typography>
                    </Grid>
                    {/* Price Block */}
                    <Grid
                      item
                      style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="h5"
                        className={classes.primaryPriceBlock}>
                        ₹12,999
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{
                          textDecorationLine: "line-through"
                          // display: "inline"
                        }}>
                        ₹13,999
                      </Typography>
                      <Divider
                        orientation="vertical"
                        variant="fullWidth"
                        flexItem
                        style={{ margin: "0 15px" }}
                      />
                      <Rating
                        name="customized-empty"
                        defaultValue={2}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        readOnly
                      />
                    </Grid>
                    <Divider style={{ margin: "15px 0" }} light />
                    {/* Highlights */}
                    <Grid item>
                      <Typography variant="subtitle1">Highlights,</Typography>

                      <ul style={{ fontSize: "1.1em" }}>
                        <li>RAM: 4 GB,</li>
                        <li> Back Camera: 2 MP|13 MP,</li>
                        <li> Screen Resolution: 1520.0 X 720.0 pixel,</li>
                        <li> Network Type: 3G ,2G ,4G ,4G VOLTE ,</li>
                        <li> Internal Storage: 32 GB,</li>
                        <li> Front Camera: 8 MP,</li>
                        <li> Processor: MediaTek Helio P22 ,</li>
                        <li> Expandable Storage: 256 GB,</li>
                        <li> Display Size: 6.22 inch,</li>
                        <li> Battery: 4030 mAH</li>
                      </ul>
                    </Grid>
                    <Divider style={{ margin: "15px 0" }} light />
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="flex-end"
                      justify="center">
                      {/* // style={{ display: "flex", justifyContent: "flex-end" }}> */}
                      <Grid
                        item
                        style={{ display: "flex", paddingBottom: "5px" }}>
                        <Typography variant="subtitle2">
                          Available -&nbsp;
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          style={{ color: "green", fontWeight: "bold" }}>
                          In Stock
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          color="primary"
                          variant="contained"
                          className={classes.actionButtom}>
                          Add To Cart
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <Grid container direction="column">
                    {/* Title */}
                    <Grid item style={{ paddingBottom: "15px" }}>
                      <Typography
                        color="secondary"
                        variant="h6"
                        style={{ marginBottom: 0, fontWeight: "bold" }}
                        gutterBottom>
                        Realme 6 (Comet Blue, 64 GB) (4 GB RAM)
                      </Typography>
                      <Typography variant="subtitle2">by Realme</Typography>
                    </Grid>
                    {/* Price Block */}
                    <Grid
                      item
                      style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="h5"
                        className={classes.primaryPriceBlock}>
                        ₹12,999
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{
                          textDecorationLine: "line-through"
                          // display: "inline"
                        }}>
                        ₹13,999
                      </Typography>
                      <Divider
                        orientation="vertical"
                        variant="fullWidth"
                        flexItem
                        style={{ margin: "0 15px" }}
                      />
                      <Rating
                        name="customized-empty"
                        defaultValue={2}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        readOnly
                      />
                    </Grid>
                    <Divider style={{ margin: "15px 0" }} light />
                    {/* Highlights */}
                    <Grid item>
                      <Typography variant="subtitle1">Highlights,</Typography>

                      <ul style={{ fontSize: "1.1em" }}>
                        <li>RAM: 4 GB,</li>
                        <li> Back Camera: 2 MP|13 MP,</li>
                        <li> Screen Resolution: 1520.0 X 720.0 pixel,</li>
                        <li> Network Type: 3G ,2G ,4G ,4G VOLTE ,</li>
                        <li> Internal Storage: 32 GB,</li>
                        <li> Front Camera: 8 MP,</li>
                        <li> Processor: MediaTek Helio P22 ,</li>
                        <li> Expandable Storage: 256 GB,</li>
                        <li> Display Size: 6.22 inch,</li>
                        <li> Battery: 4030 mAH</li>
                      </ul>
                    </Grid>
                    <Divider style={{ margin: "15px 0" }} light />
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="flex-end"
                      justify="center">
                      {/* // style={{ display: "flex", justifyContent: "flex-end" }}> */}
                      <Grid
                        item
                        style={{ display: "flex", paddingBottom: "5px" }}>
                        <Typography variant="subtitle2">
                          Available -&nbsp;
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          style={{ color: "green", fontWeight: "bold" }}>
                          In Stock
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          color="primary"
                          variant="contained"
                          className={classes.actionButtom}>
                          Add To Cart
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
