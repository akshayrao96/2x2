import React from "react";
import "./Counter.css";

function Counter(props) {
  const count = props.count;
  return <h1 className="counter">Counter: {count}</h1>;
}

export default Counter;
