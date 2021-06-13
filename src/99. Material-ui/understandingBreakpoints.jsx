import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const styles = {
  root: {},
  singleItem: {
    // paddingLeft: "3px !important",
    // backgroundColor: "red",
  },
  paper: {
    color: theme,
  },
};
const UnderstandingBreakpoint = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3} className={classes.singleItem}>
          <Paper className={classes.paper}>xs = 12 md = 6 lg = 3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>xs = 12 md = 6 lg = 3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>xs = 12 md = 6 lg = 3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>xs = 12 md = 6 lg = 3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(UnderstandingBreakpoint);
