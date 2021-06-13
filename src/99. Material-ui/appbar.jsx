import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabContent: {
    padding: theme.spacing.unit * 2,
  },
  tab: {
    minWidth: 20,
    margin: 5,
  },
});
const Appbar = (props) => {
  const { classes } = props;
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab className={classes.tab} label="Item one" />
          <Tab className={classes.tab} label="Item two" />
          <Tab className={classes.tab} label="Item three" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <Typography variant="h4" className={classes.tabContent}>
          Item one
        </Typography>
      )}
      {value === 1 && (
        <Typography variant="h4" className={classes.tabContent}>
          Item two
        </Typography>
      )}
      {value === 2 && (
        <Typography variant="h4" className={classes.tabContent}>
          Item three
        </Typography>
      )}
    </div>
  );
};

export default withStyles(styles)(Appbar);
