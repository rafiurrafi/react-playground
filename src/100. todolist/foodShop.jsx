import React, { Component } from "react";
import foods from "./service/service/foodService";
class FoodShop extends Component {
  state = {};
  render() {
    console.log(this.props);
    return <h1>Shop {this.props.name}</h1>;
  }
}

export default FoodShop;
