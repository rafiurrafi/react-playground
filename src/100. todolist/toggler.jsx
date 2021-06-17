import React, { useState } from "react";
const Toggler = (props) => {
  const [isHappy, setIsHappy] = useState(false);
  const [isMarried, setIsMarried] = useState(false);
  const changeIsHappy = () => {
    setIsHappy(!isHappy);
  };
  const changeIsMarried = () => {
    setIsMarried(!isMarried);
  };
  return (
    <div>
      <h1 onClick={changeIsHappy}>{isHappy ? "😁" : "😒"}</h1>
      <h2 onClick={changeIsMarried} style={{ fontSize: "130px" }}>
        {isMarried ? "💑" : "🤼‍♂️"}
      </h2>
    </div>
  );
};

export default Toggler;
