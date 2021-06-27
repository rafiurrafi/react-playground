import React, { Component } from "react";
import users from "../service/fakeUserGenerator";
import Card from "./card";
import "./styles/cards.css";
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.setState({ users: [...users] });
  }
  handleClick() {
    this.setState({ users: [] });
  }
  render() {
    const { users } = this.state;
    return (
      <main className="cards">
        <h3>{users.length} have birthday today</h3>
        {users.map((user) => (
          <Card key={user._id} user={user} />
        ))}
        <a onClick={this.handleClick} className="btn btn--primary">
          Clear all
        </a>
      </main>
    );
  }
}

export default Cards;
