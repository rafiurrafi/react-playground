import React, { useState } from "react";
import useToggle from "./hooks/useToggle";
const Toggler = (props) => {
  //   const [isHappy, setIsHappy] = useState(false);
  //   const [isMarried, setIsMarried] = useState(false);
  //   const changeIsHappy = () => {
  //     setIsHappy(!isHappy);
  //   };
  //   const changeIsMarried = () => {
  //     setIsMarried(!isMarried);
  //   };
  const [isHappy, setIsHappy] = useToggle();
  const [isMarried, setIsMarried] = useToggle();
  return (
    <div>
      <h1 onClick={setIsHappy}>{isHappy ? "😁" : "😒"}</h1>
      <h2 onClick={setIsMarried} style={{ fontSize: "130px" }}>
        {isMarried ? "💑" : "🤼‍♂️"}
      </h2>
    </div>
  );
};

export default Toggler;
