import React, { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLeters";

const MyHome = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "My Portfoilo".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 1);
  });

  return (
    <div>
      <h2  className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="chars"
              data-animate="active">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
      </h2>
    </div>
  );
};

export default MyHome;
