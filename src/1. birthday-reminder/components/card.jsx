import React, { Component } from "react";
import "./styles/card.css";
class Card extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div className="card">
        <img src={user.img} alt="image name" className="card__img" />
        <div className="card__text">
          <h3 className="card__name">{user.name}</h3>
          <p className="card__age">{user.age}</p>
        </div>
      </div>
    );
  }
}

export default Card;
