import React, { useEffect, useState } from "react";
import AnimatedLetters from "../Utils/AnimatedLeters";

const Blog = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "My Blog".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 1);
  });
  return (
    <section className="section section-bg" id="blog-section">
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
              My Blog
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
                Suspendisse potenti. Sed egestas eros eu libero posuere
                ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Blog */}
      <div className="blog-items">
        <div className="archive-item">
          <div className="image">
            <a href="blog-single.html">
              <img
                src="assets/images/blog4.jpg"
                alt="Usability Secrets to Create Better User Interfaces"
              />
            </a>
          </div>
          <div className="desc">
            <div
              className="category scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              UI Design
              <br />
              <span>November 28, 2021</span>
            </div>
            <h3
              className="title scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="blog-single.html">
                Usability Secrets to Create Better User Interfaces
              </a>
            </h3>
            <div
              className="text scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <p>
                Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
                Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
                ornare eget…{" "}
              </p>
              <div className="readmore">
                <a href="blog-single.html" className="lnk">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="archive-item">
          <div className="image">
            <a href="blog-single.html">
              <img
                src="assets/images/blog3.jpg"
                alt="Three Ways To Level Up Your Photography"
              />
            </a>
          </div>
          <div className="desc">
            <div
              className="category scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              Branding
              <br />
              <span>November 28, 2021</span>
            </div>
            <h3
              className="title scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="blog-single.html">
                Three Ways To Level Up Your Photography
              </a>
            </h3>
            <div
              className="text scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <p>
                Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
                Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
                ornare eget…{" "}
              </p>
              <div className="readmore">
                <a href="blog-single.html" className="lnk">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="archive-item">
          <div className="image">
            <a href="blog-single.html">
              <img
                src="assets/images/single7.jpg"
                alt="10 Useful Tips to Improve Your UI Designs"
              />
            </a>
          </div>
          <div className="desc">
            <div
              className="category scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              Photography
              <br />
              <span>November 28, 2021</span>
            </div>
            <h3
              className="title scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="blog-single.html">
                10 Useful Tips to Improve Your UI Designs
              </a>
            </h3>
            <div
              className="text scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <p>
                Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
                Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
                ornare eget…
              </p>
              <div className="readmore">
                <a href="blog-single.html" className="lnk">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-more-link">
        <a
          href="blog.html"
          className="btn scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          View Blog
        </a>
      </div>
    </section>
  );
};

export default Blog;
