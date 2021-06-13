import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const ListItems = (props) => {
  const [items, setItems] = useState([
    { name: "Abdus Salam", time: new Date() },
    { name: "Abdus Kalam", time: new Date() },
    { name: "Abdus Balam", time: new Date() },
  ]);
  return (
    <div>
      <List>
        {items.map((item) => (
          <ListItem button>
            <ListItemText
              primary={item.name}
              secondary={item.time.toLocaleString()}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListItems;
