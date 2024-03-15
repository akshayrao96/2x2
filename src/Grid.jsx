import React, { useState } from "react";
import Box from "./Box";
import Counter from "./Counter";
import "./Grid.css";

function Grid() {
  const [count, setCount] = useState(0);

  const handleClick = (isBoxOn) => {
    setCount((prevCount) => (isBoxOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div>
      <Counter count={count} />
      <div className="container">
        <Box onClick={handleClick} />
        <Box onClick={handleClick} />
        <Box onClick={handleClick} />
        <Box onClick={handleClick} />
      </div>
    </div>
  );
}

export default Grid;
