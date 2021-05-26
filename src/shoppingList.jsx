import React, { Component } from "react";
import ShoppingForm from "./shoppingForm";
class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", amount: "2 Gallon" },
        { name: "Egg", amount: "10 Kg" },
      ],
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  handleAddItem(item) {
    const NewItems = this.state.items;
    NewItems.push(item);
    this.setState({ items: NewItems });
  }
  render() {
    const styles = {
      color: "pink",
      fontSize: "20",
      fontFamily: "sans-serif",
      fontStyle: "italic",
      fontWeight: 400,
    };
    return (
      <div>
        <h1>
          Shopping - <span style={styles}>Freya</span>
        </h1>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.name}>
              {item.name} - {item.amount}
            </li>
          ))}
        </ul>
        <ShoppingForm onAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default ShoppingList;
