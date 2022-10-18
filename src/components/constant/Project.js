import React, { useEffect, useState } from "react";
import AnimatedLetters from "../Utils/AnimatedLeters";

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "My Portfoilo".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 1000);
  });

  return (
    <section
      className="section section-bg section-parallax-5"
      id="works-section"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2
            className="m-title splitting-text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h2>
          {/* removed */}
          {/* <h2
          className="m-title splitting-text-anim-1 scroll-animate"
          data-splitting="chars"
          data-animate="active"
        >
          My Projects
        </h2> */}
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            {/* Description */}
            <div
              className="text scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <p>
                A small gallery of recent projects chosen by me. I've done them
                all together with amazing people from companies around the
                globe. It's only a drop in the ocean compared to the entire
                list.
                
                <p> Interested to see some more?  Visit <a href="/works"><strong> my work </strong></a>page</p>
              </p>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="works-box">
          <div
            className="filter-links scrolla-element-anim-1 scroll-animate"
            data-animate="active"
          >
            <a href="#" className="active" data-href=".works-col">
              All
            </a>
            <a href="#" data-href=".sorting-ui-ux-design">
              UI UX Design
            </a>
            <a href="#" data-href=".sorting-photo">
              Photography
            </a>
            <a href="#" data-href=".sorting-development">
              Development
            </a>
            <a href="#" data-href=".sorting-branding">
              Branding
            </a>
          </div>
          <div className="works-items works-list-items row">
            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
              <div className="works-item">
                <a href="work-single.html">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src="assets/images/work4.jpg" alt="Zorro" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Zorro
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Branding
                      <br />
                      Photography
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
              <div className="works-item">
                <a href="work-single.html">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src="assets/images/work2.jpg" alt="Gooir" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Gooir
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Branding
                      <br />
                      UI UX Design
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
              <div className="works-item">
                <a href="work-single.html">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src="assets/images/work7.jpg" alt="Explore" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Explore
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Development
                      <br />
                      UI UX Design
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
              <div className="works-item">
                <a href="work-single.html">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src="assets/images/work1.jpg" alt="Mozar" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Mozar
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Branding
                      <br />
                      Photography
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
              <div className="works-item">
                <a href="work-single.html">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src="assets/images/single8.jpg" alt="Stay Fit" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Stay Fit
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Development
                      <br />
                      UI UX Design
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
              <div className="works-item">
                <a href="work-single.html">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src="assets/images/single6.jpg" alt="Kana" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Kana
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Development
                      <br />
                      Photography
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
