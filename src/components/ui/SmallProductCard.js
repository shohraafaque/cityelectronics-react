import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function SmallProductCard(props) {
  return (
    <Grid item>
      <Paper
        elevation={4}
        style={{
          borderRadius: "0.25rem",
          backgroundColor: "#f7f7f7"
        }}>
        <Grid
          // item
          container
          justify="center"
          alignItems="center"
          style={{ width: "16em", padding: "1.2rem" }}>
          <Grid item xs style={{ flexShrink: 1 }}>
            <Typography
              variant="subtitle1"
              noWrap={true}
              style={{ fontWeight: 600 }}
              gutterBottom={false}>
              {props.productDetail.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              by {props.productDetail.brand},
            </Typography>
          </Grid>
          <Grid item style={{ width: "8rem", margin: "2rem" }}>
            <img
              alt=""
              src={props.productDetail.icon}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item>
            <Rating
              name="size-small"
              size="small"
              defaultValue={3.5}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              readOnly
              style={{ width: "10em", justifyContent: "center" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              display="block"
              color="primary"
              style={{ fontWeight: "bold" }}>
              ₹12,999
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
