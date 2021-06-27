import React, { Component, useState } from "react";
import users from "../service/fakeUserGenerator";
import Card from "./card";
import "./styles/cards.css";

const Cards = (props) => {
  const [users, setUsers] = useState(users);
  const handleClick = () => {
    setUsers({ users: [] });
  };
  return (
    <main className="cards">
      <h3>{users.length} have birthday today</h3>
      {users.map((user) => (
        <Card key={user._id} user={user} />
      ))}
      <a onClick={handleClick} className="btn btn--primary">
        Clear all
      </a>
    </main>
  );
};

export default Cards;
