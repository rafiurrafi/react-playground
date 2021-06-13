import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Button } from "@material-ui/core";
const DrawerContainer = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClick={() => setOpen(false)}>
        <List>
          <ListItem button onClick={() => setOpen(false)}>
            Item 1
          </ListItem>
        </List>
      </Drawer>
      <Button variant="outlined" onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"} Drawer
      </Button>
    </>
  );
};

export default DrawerContainer;
