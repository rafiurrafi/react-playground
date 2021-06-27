import React, { Component } from "react";
import "./styles/card.css";
class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <img src="img/08.jpg" alt="image name" className="card__img" />
        <div className="card__text">
          <h3 className="card__name">Usama</h3>
          <p className="card__age">13</p>
        </div>
      </div>
    );
  }
}

export default Card;
