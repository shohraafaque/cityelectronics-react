import React from "react";
import {
  makeStyles,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ProductImageGallary from "./ui/ProductImageGallary";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import GuaranteeIcon from "../assets/guarantee.svg";
import ClockIcon from "../assets/clock.svg";
import OriginalIcon from "../assets/original.png";
import { grey } from "@material-ui/core/colors";
import SmallProductCard from "./ui/SmallProductCard";

const recommendedItems = [
  {
    title:
      "Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum",
    brand: "Apple",
    icon:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/01.png"
  },
  {
    title:
      "Beats by Dr. Dre - Powerbeats2 Wireless Earbud Headphones - Black/Red",
    brand: "Beats",
    icon:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/08.png"
  },
  {
    title: "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
    brand: "Amazon",
    icon:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/03.png"
  },
  {
    title:
      "Apple - Apple Watch Nike+ 42mm Silver Aluminum Case Silver/Volt Nike Sport Band - Silver Aluminum",
    brand: "Apple",
    icon:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/07.png"
  },
  {
    title: "Google - Chromecast Ultra - Black",
    brand: "Google",
    icon:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/05.png"
  }
];

const specification = [
  {
    name: "Processor",
    value: "MediaTek Helio P22 "
  },
  {
    name: "Expandable Storage",
    value: "256 GB"
  },
  {
    name: "Internal Storage",
    value: "32 GB"
  },
  {
    name: "Front Camera",
    value: "8 MP"
  },
  {
    name: "Network Type",
    value: "3G ,2G ,4G ,4G VOLTE "
  },
  {
    name: "Display Size",
    value: "6.22 inch"
  },
  {
    name: "Battery",
    value: "4030 mAH"
  },
  {
    name: "RAM",
    value: "4 GB"
  },
  {
    name: "Screen Resolution",
    value: "1520.0 X 720.0 pixel"
  },
  {
    name: "Back Camera",
    value: "2 MP|13 MP"
  }
];
const useStyle = makeStyles(theme => ({
  primaryPriceBlock: {
    fontWeight: "bold",
    color: theme.palette.primary.main
  },
  productTitle: {
    fontWeight: "bold",
    color: theme.palette.primary.main
  },
  brandName: {
    color: theme.palette.primary.main
  }
}));
export default function DetailPage() {
  const classes = useStyle({});

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        spacing={3}
        style={{ paddingLeft: "17em", paddingRight: "17em" }}>
        {/* Page Container */}
        <Grid item container direction="column">
          {/* Main Section */}
          <Grid item>
            <Paper
              style={{
                minHeight: "40em",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px 5px 0 0"
              }}>
              <Grid
                container
                direction="row"
                justify="center"
                spacing={7}
                alignItems="center">
                <Grid item style={{ width: "30em" }}>
                  <ProductImageGallary />
                </Grid>
                <Grid item>
                  <Divider light />
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    {/* Title */}
                    <Grid item style={{ paddingBottom: "15px" }}>
                      <Typography
                        color="secondary"
                        variant="h6"
                        className={classes.productTitle}
                        gutterBottom={false}>
                        Realme 6 (Comet Blue, 64 GB) (4 GB RAM)
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className={classes.brandName}>
                        by Realme
                      </Typography>
                    </Grid>
                    {/* Price Block */}
                    <Grid
                      item
                      style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="h5"
                        className={classes.primaryPriceBlock}>
                        ₹12,999&nbsp;
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
                        defaultValue={3.5}
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
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* Warranty Card */}
          <Grid item>
            <Paper
              style={{
                backgroundColor: grey["200"],
                borderRadius: "0"
              }}>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                style={{ padding: "39px 0px" }}>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  // justify="center"
                  style={{ width: "20em" }}>
                  <Grid item>
                    <img
                      src={OriginalIcon}
                      alt=""
                      style={{ height: "7em", width: "7em" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">100% Original</Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="center" variant="subtitle2">
                      Chocolate bar candy canes ice cream toffee cookie halvah.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ width: "20em" }}>
                  <Grid item>
                    <img
                      src={ClockIcon}
                      alt=""
                      style={{ height: "5em", width: "5em" }}
                    />{" "}
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">10 Day Replacement</Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="center" variant="subtitle2">
                      Marshmallow biscuit donut dragée fruitcake wafer.{" "}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ width: "20em" }}>
                  <Grid item>
                    <img
                      src={GuaranteeIcon}
                      alt=""
                      style={{ height: "5em", width: "5em" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">1 Year Warranty</Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="center" variant="subtitle2">
                      Cotton candy gingerbread cake I love sugar sweet.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* Specifications */}
          <Grid item>
            <Paper
              style={{
                // minHeight: "40em",
                borderRadius: "0 0 5px 5px"
              }}>
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="column">
                <Grid item style={{ paddingTop: "2.5em" }}>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    SPECIFICATIONS
                  </Typography>
                </Grid>
                <TableContainer
                  style={{
                    width: "52em",
                    paddingTop: "3em",
                    paddingBottom: "3.5em"
                  }}>
                  <Table aria-label="simple table">
                    <TableBody>
                      {specification.map(eachItem => (
                        <TableRow key={eachItem.name}>
                          <TableCell component="th" scope="row">
                            {eachItem.name}
                          </TableCell>
                          <TableCell align="right">{eachItem.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        {/* Similar Products */}
        <Grid item>
          <Paper elevation={2}>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="column">
              <Grid item style={{ paddingTop: "2.5em" }}>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  SIMILAR PRODUCTS
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  People also search for this items
                </Typography>
              </Grid>
              {/* Container for List of Items */}
              <Grid
                container
                justify="center"
                alignItems="center"
                style={{ paddingTop: "4em", paddingBottom: "3.5em" }}
                spacing={5}>
                {/* Each List Items */}
                {recommendedItems.map((eachItem, index) => (
                  <SmallProductCard
                    key={eachItem.title}
                    productDetail={eachItem}
                  />
                ))}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
