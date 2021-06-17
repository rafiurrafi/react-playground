import React from "react";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Chip } from "@material-ui/core";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});
const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;
const Breakpoints = (props) => {
  const { classes } = props;
  return (
    <Container className={classes.root} spacing={4}>
      <Item xs={12}>
        <Paper>Header</Paper>
      </Item>
      <Item xs={6}>
        <Paper>second</Paper>
      </Item>
      <Item xs={6}>
        <Paper>second</Paper>
      </Item>
      <Item xs={12}>
        <Paper>Footer</Paper>
      </Item>
    </Container>
  );
};

export default withStyles(styles)(Breakpoints);
