import React from "react";
import './AnimatedLetters.css'


const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return React.createElement(
    "div",
    { style: { display: "inline" } },
    strArray.map((char, i) =>
      React.createElement(
        "span",
        { key: char + i, className: `${letterClass} _${i + idx}` },
        char
      )
    )
  );
};
export default AnimatedLetters;
