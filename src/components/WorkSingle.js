import React from "react";

const WorkSingle = () => {
  return (
    <div className="wrapper project-single">
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
                  Mozar
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Details */}
      <section className="section section-inner details">
        <div className="container">
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              <div className="m-details">
                <div className="details-label">
                  <span>Year</span>
                  <strong>2018</strong>
                </div>
                <div className="details-label">
                  <span>Technology</span>
                  <strong>Photoshop, XD</strong>
                </div>
                <div className="details-label">
                  <span>Categories</span>
                  <strong>
                    Photography <br />
                    Branding
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Image Large */}
      <section
        className="m-image-large scrolla-element-anim-1 scroll-animate"
        data-animate="active"
      >
        <div className="image">
          <div
            className="img js-parallax"
            style={{ backgroundImage: "url(assets/images/single1.jpg)" }}
          />
        </div>
      </section>
      {/* Description */}
      <section className="section section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="p-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Project Goal
              </div>
              <div
                className="text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Aliquam a sapien diam. Phasellus pulvinar tellus aliquam
                  eleifend consectetur. Sed bibendum leo quis rutrum
                  aliquetmorbi.
                </p>
                <p>
                  Donec imperdiet risus at tortor consequat maximus et eget
                  magna. Cras ornare sagittis augue, id sollicitudin justo
                  tristique ut. Nullam ex enim, euismod vel bibendum ultrices,
                  fringilla vel eros. Donec euismod leo lectus, et euismod metus
                  euismod sed. Quisque quis suscipit ipsum, at pellentesque
                  velit. Duis a congue sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Gallery */}
      <section className="section section-inner">
        <div className="container">
          <div className="row m-gallery">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="works-item">
                <div
                  className="image scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="img">
                    <a
                      href="assets/images/blog7.jpg"
                      className="has-popup-image"
                    >
                      <img src="assets/images/blog7.jpg" alt="#1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="works-item">
                <div
                  className="image scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="img">
                    <a
                      href="assets/images/blog8.jpg"
                      className="has-popup-image"
                    >
                      <img src="assets/images/blog8.jpg" alt="#2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="works-item">
                <div
                  className="image scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="img">
                    <a
                      href="assets/images/blog5.jpg"
                      className="has-popup-image"
                    >
                      <img src="assets/images/blog5.jpg" alt="#3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Description */}
      <section className="section section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="p-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Project Goal
              </div>
              <div
                className="text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Aliquam a sapien diam. Phasellus pulvinar tellus aliquam
                  eleifend consectetur. Sed bibendum leo quis rutrum
                  aliquetmorbi.
                </p>
                <p>
                  Donec imperdiet risus at tortor consequat maximus et eget
                  magna. Cras ornare sagittis augue, id sollicitudin justo
                  tristique ut. Nullam ex enim, euismod vel bibendum ultrices,
                  fringilla vel eros. Donec euismod leo lectus, et euismod metus
                  euismod sed. Quisque quis suscipit ipsum, at pellentesque
                  velit. Duis a congue sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video */}
      <section className="m-video-large">
        <div className="video">
          <div
            className="img js-parallax"
            style={{ backgroundImage: "url(assets/images/blog9.jpg)" }}
          />
          <iframe
            className="js-video-iframe"
            data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
          />
          <div className="play" />
        </div>
      </section>
      {/* Navigation */}
      <section className="m-page-navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="h-titles h-navs">
                <a href="work-single.html">
                  <span
                    className="nav-arrow scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Next Project
                  </span>
                  <span
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Kana
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkSingle;
