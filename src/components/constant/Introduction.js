import React, { useEffect, useState } from "react";
import AnimatedLetters from "../Utils/AnimatedLeters";

const Introduction = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "Samuel".split("");
  const nameArrays = "Amoah".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 1);
  });

  return (
    <section className="section section-started">
      <div className="container">
        {/* Hero Started */}
        <div className="hero-started">
          <div
            className="slide scrolla-element-anim-1 scroll-animate"
            data-animate="active"
          >
            <img src="assets/images/homie.svg" alt />
            <span className="circle circle-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="749px"
                height="375px"
              >
                <path
                  fillRule="evenodd"
                  fill="#ff8059"
                  d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                />
              </svg>
            </span>
            <span className="circle circle-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="416px"
                height="209px"
              >
                <path
                  fillRule="evenodd"
                  fill="#3aafc9"
                  d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                />
              </svg>
            </span>
            <span className="circle circle-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="416px"
                height="209px"
              >
                <path
                  fillRule="evenodd"
                  fill="#b9d1e4"
                  d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                />
              </svg>
            </span>
            <span className="circle circle-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="121px"
                height="241px"
              >
                <path
                  fillRule="evenodd"
                  fill="#676cdb"
                  d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                />
              </svg>
            </span>
            <span className="circle circle-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="232px"
                height="117px"
              >
                <path
                  fillRule="evenodd"
                  fill="rgb(255, 208, 65)"
                  d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                />
              </svg>
            </span>
          </div>
          <div className="content">
            <div className="titles">
              <div
                className="subtitle splitting-text-anim-2 scroll-animate"
                data-splitting="chars"
                data-animate="active"
              >
                WEB DEVELOPER
              </div>

              {/* Start */}

              <h2
                data-splitting="chars"
                data-animate="active"
                className="title splitting-text-anim-1 scroll-animate"
              >
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
              </h2>
              <h2
                data-splitting="chars"
                data-animate="active"
                className="title splitting-text-anim-1 scroll-animate"
              >
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArrays}
                  idx={15}
                />
              </h2>

              {/* removed */}

              {/* <h2
                className="title splitting-text-anim-1 scroll-animate"
                data-splitting="chars"
                data-animate="active"
                >
                Federico <br />
                Ober
              </h2> */}

                {/* end */}
            </div>
            <div
              className="description scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <p>
              I'm creative designer based in Ghana, and I'm very passionate and dedicated to my work. I love travelling, photography &amp; music.
              </p>
              <div className="social-links">
                
                <a target="_blank" rel="nofollow" href="https://twitter.com/samuellove226">
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
                <a target="_blank" rel="nofollow" href="https://github.com/lilyoo226">
                  <i aria-hidden="true" className="fab fa-github" />
                </a>
                <a target="_blank" rel="nofollow" href="https://www.youtube.com/channel/UC9SxlcEpkHFkG0msmzw1MCA">
                  <i aria-hidden="true" className="fab fa-youtube" />
                </a>
                
              </div>
            </div>
          </div>
          <div className="info-list">
            <ul>
              <li
                className="scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Born in <strong>Ghana</strong>
              </li>
              <li
                className="scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Experience <strong>4+ Years</strong>
              </li>
              <li
                className="scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Date of Birth <strong>5 February 2002</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
