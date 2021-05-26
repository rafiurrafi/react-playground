import React, { Component } from "react";
class ShoppingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log({ name: this.state.name, amount: this.state.amount });
    this.props.onAddItem({ name: this.state.name, amount: this.state.amount });
  }
  render() {
    return (
      <div>
        <h3>Add your desired item</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Item name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Item amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <button>Add to cart</button>
        </form>
      </div>
    );
  }
}

export default ShoppingForm;
