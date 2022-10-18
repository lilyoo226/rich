import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../Utils/AnimatedLeters';

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "Contact Me".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 1);
  });
  return (
    <section
    className="section section-bg section-parallax-2"
    id="contact-section"
  >
    <div className="container">
      {/* Section Heading */}
      <div className="m-titles">
      <h2  className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="chars"
              data-animate="active">
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
          Contact Me
        </h2> */}
      </div>
      <div className="row row-custom">
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
          {/* Section numbers */}
          <div className="numbers-items contacts-items">
            <div
              className="numbers-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="icon">
                <i aria-hidden="true" className="fas fa-phone" />
              </div>
              <div className="num">+ 233 599 615 860</div>
            </div>
            <div
              className="numbers-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="icon">
                <i aria-hidden="true" className="fas fa-at" />
              </div>
              <div className="num"><a href="mailto:samuellove228@gmail.com">samuellove228</a></div>
            </div>
            <div
              className="numbers-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="icon">
                <i aria-hidden="true" className="fas fa-location-arrow" />
              </div>
              <div className="num">Kumasi Ghana</div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
          {/* contact form */}
          <div
            className="contacts-form scrolla-element-anim-1 scroll-animate"
            data-animate="active"
          >
            <form id="cform" method="post">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  defaultValue={""}
                />
              </label>
              <a
                href="#"
                className="btn"
                onclick="$('#cform').submit(); return false;"
              >
                Submit
              </a>
            </form>
          </div>
          <div className="alert-success" style={{ display: "none" }}>
            <p>Thanks, your message is sent successfully.</p>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}

export default Contact