import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

const DrawerTask = (props) => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default DrawerTask;
