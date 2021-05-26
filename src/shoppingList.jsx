import React, { Component } from "react";
class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", amount: "2 Gallon" },
        { name: "Egg", amount: "10 Kg" },
      ],
    };
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
      </div>
    );
  }
}

export default ShoppingList;
