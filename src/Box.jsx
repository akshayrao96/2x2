import "./Box.css";
import React, { useState } from "react";

function Box(props) {
  const onClick = props.onClick;
  const [isBlack, setIsBlack] = useState(false);

  const handleClick = () => {
    const nextState = !isBlack;
    setIsBlack(nextState);
    onClick(nextState);
  };

  const color = isBlack ? "box black" : "box";

  return <div className={color} onClick={handleClick}></div>;
}

export default Box;
