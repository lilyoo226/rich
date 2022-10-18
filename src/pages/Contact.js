import React from "react";

const Contact = () => {
  return (
    <div className="wrapper">
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* titles */}
              <div className="h-titles">
                <h1
                  className="h-title scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Contact Me
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Works */}
      <section className="section section-inner m-archive">
        <div className="container">
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <h6>
                  A Collection of my favorites project I’ve designed recently.
                  Feeling great while sharing here.
                </h6>
              </div>
            </div>
          </div>
         {/* Here */}
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
                  <div className="num">+1 023-456-7800</div>
                </div>
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="fas fa-at" />
                  </div>
                  <div className="num">hi@ober.com</div>
                </div>
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="fas fa-location-arrow" />
                  </div>
                  <div className="num">43rd Street River Point NY 1023</div>
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
      </section>
    </div>
  );
};

export default Contact;
