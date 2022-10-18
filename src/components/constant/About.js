import React, { useEffect, useState } from "react";
import AnimatedLetters from "../Utils/AnimatedLeters";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "About Me".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 1);
  });
  return (
    <section
      className="section section-bg section-parallax-1"
      id="about-section"
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

          {/* Removed */}
          {/* <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="chars"
              data-animate="active"
            >
              About Me
            </h2> */}
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
            {/* Section numbers */}
            <div className="numbers-items">
              <div
                className="numbers-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i aria-hidden="true" className="far fa-check-circle" />
                </div>
                <div className="num">112</div>
                <div className="title">
                  Completed <br />
                  Project
                </div>
              </div>
              <div
                className="numbers-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i aria-hidden="true" className="far fa-smile-beam" />
                </div>
                <div className="num">61</div>
                <div className="title">
                  Happy <br />
                  Clients
                </div>
              </div>
              <div
                className="numbers-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i aria-hidden="true" className="far fa-gem" />
                </div>
                <div className="num">5</div>
                <div className="title">
                  Awards <br />
                  Won
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            {/* Section Profile */}
            <div className="profile-box">
              <div
                className="text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Hello! My name is Samuel and I enjoy creating things that live
                  on the internet. My interest in web development started back
                  in 2018 when I decided to try editing custom Wordpress themes
                  — turns out hacking together a custom reblog button taught me
                  a lot about HTML & CSS!
                </p>
                <p>
                  Fast-forward to today, and I’ve had the privilege of working
                  at an advertising agency, a start-up, a huge corporation, and
                  a student-led design studio. My main focus these days is
                  building accessible, inclusive products and digital
                  experiences at Upstatement for a variety of clients.
                </p>
                <p>
                  I also recently launched a course that covers everything you
                  need to build a web app with the Spotify API using Node &
                  React.
                </p>
                <p>
                  Here are the few technologies that I'have been working
                  recently
                </p>
                <div className="homie-skills">
                  <ul >
                    <li>Javascript</li>
                    <li>Nodejs</li>
                    <li>MongoDb</li>
                    <li>SQL</li>
                  </ul>
                  <ul>
                    <li>Python</li>
                    <li>Expressjs</li>
                    <li>Nextjs</li>
                    <li>Data Structures</li>
                  </ul>
                  <ul>
                    <li>HTML/CSS</li>
                    <li>Reactjs</li>
                    <li>React Redux</li>
                    <li>Algorithms</li>
                  </ul>
                </div>
                <a
                  href="#contact-section"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Contact Me
                </a>
                <div
                  className="signature scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  {/* <img src="assets/images/signature.png" alt /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
