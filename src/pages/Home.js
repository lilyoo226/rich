import React from "react";

const Home = () => {
  return (
    <div>
      <main id="body-inner">
        {/* Begin page transition (do not remove!!!) 
    =========================== */}
        <div id="page-transition">
          <div className="ptr-overlay" />
          <div className="ptr-preloader">
            <div className="ptr-prel-content">
              {/* Hint: You may need to change the img height and opacity to match your logo type. You can do this from the "theme.css" file (find: ".ptr-prel-image"). */}
              <img
                src="assets/img/logo-light.png"
                className="ptr-prel-image tt-logo-light"
                alt="Logo"
              />
            </div>{" "}
            {/* /.ptr-prel-content */}
          </div>{" "}
          {/* /.ptr-preloader */}
        </div>
        {/* End page transition */}
        {/* Begin magic cursor 
    ======================== */}
        <div id="magic-cursor">
          <div id="ball" />
        </div>
        {/* End magic cursor */}
        {/* Begin noise background */}
        <div className="bg-noise" />
        {/* End noise background */}
        {/* *****************************************
         *********** Begin scroll container ***********
         ****************************************** */}
        <div id="scroll-container">
          {/* ===================
  ///// Begin header /////
  ========================
  * Use class "tt-header-fixed" to set header to fixed position.
  */}
          <header id="tt-header" className="tt-header-fixed">
            <div className="tt-header-inner">
              {" "}
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag!). Note: additionally you can use prepared helper class "max-width-*" to add custom width to "tt-wrap". Example: "max-width-1500" (class "tt-wrap" is still required!). More info about helper classes can be found in the file "helper.css". */}
              <div className="tt-header-col">
                {/* Begin logo 
              ================ */}
                <div className="tt-logo">
                  <a href="index.html">
                    {/* Hint: You may need to change the img height to match your logo type. You can do this from the "theme.css" file (find: ".tt-logo img"). */}
                    <img
                      src="assets/img/logo-light.png"
                      className="tt-logo-light magnetic-item"
                      alt="Logo"
                    />{" "}
                    {/* logo light */}
                    <img
                      src="assets/img/logo-dark.png"
                      className="tt-logo-dark magnetic-item"
                      alt="Logo"
                    />{" "}
                    {/* logo dark */}
                  </a>
                </div>
                {/* End logo */}
              </div>{" "}
              {/* /.tt-header-col */}
              <div className="tt-header-col">
                {/* Begin overlay menu toggle button */}
                <div id="tt-ol-menu-toggle-btn-wrap">
                  <div className="tt-ol-menu-toggle-btn-text">
                    <span className="text-menu" data-hover="Open">
                      Menu
                    </span>
                    <span className="text-close">Close</span>
                  </div>
                  <div className="tt-ol-menu-toggle-btn-holder">
                    <a href="#" className="tt-ol-menu-toggle-btn magnetic-item">
                      <span />
                    </a>
                  </div>
                </div>
                {/* End overlay menu toggle button */}
                {/* Begin overlay menu 
              ======================== 
              * Use class "tt-ol-menu-center" to align menu to center.
              * Use class "tt-ol-menu-count" to enable menu counter.
              */}
                <nav className="tt-overlay-menu tt-ol-menu-center tt-ol-menu-count">
                  <div className="tt-ol-menu-holder">
                    <div className="tt-ol-menu-inner tt-wrap">
                      <div className="tt-ol-menu-content">
                        {/* Begin menu list */}
                        <ul className="tt-ol-menu-list">
                          {/* <li><a href="">Single Link</a></li> */}
                          {/* Begin submenu (submenu master)
                                  ==================================== */}
                          <li className="tt-ol-submenu-wrap active">
                            <div className="tt-ol-submenu-trigger">
                              <a href="#">Home</a>
                              <div className="tt-ol-submenu-caret-wrap">
                                <div className="tt-ol-submenu-caret magnetic-item" />
                              </div>{" "}
                              {/* /.tt-ol-submenu-caret-wrap */}
                            </div>{" "}
                            {/* /.tt-ol-submenu-trigger */}
                            <div className="tt-ol-submenu">
                              <ul className="tt-ol-submenu-list">
                                <li>
                                  <a href="landing-page-1.html">
                                    Landing Page v.1
                                  </a>
                                </li>
                                <li className="active">
                                  <a href="landing-page-2.html">
                                    Landing Page v.2
                                  </a>
                                </li>
                              </ul>{" "}
                              {/* /.tt-ol-submenu-list */}
                            </div>{" "}
                            {/* /.tt-ol-submenu */}
                          </li>
                          {/* End submenu (sub-master) */}
                          {/* Begin submenu (submenu master)
                                  ==================================== */}
                          <li className="tt-ol-submenu-wrap">
                            <div className="tt-ol-submenu-trigger">
                              <a href="#">Portfolio</a>
                              <div className="tt-ol-submenu-caret-wrap">
                                <div className="tt-ol-submenu-caret magnetic-item" />
                              </div>{" "}
                              {/* /.tt-ol-submenu-caret-wrap */}
                            </div>{" "}
                            {/* /.tt-ol-submenu-trigger */}
                            <div className="tt-ol-submenu">
                              <ul className="tt-ol-submenu-list">
                                {/* Begin submenu
                                              =================== */}
                                <li className="tt-ol-submenu-wrap">
                                  <div className="tt-ol-submenu-trigger">
                                    <a href="#" className="tt-ol-submenu-link">
                                      Portfolio List
                                    </a>
                                    <div className="tt-ol-submenu-caret-wrap">
                                      <div className="tt-ol-submenu-caret magnetic-item" />
                                    </div>{" "}
                                    {/* /.tt-ol-submenu-caret-wrap */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu-trigger */}
                                  <div className="tt-ol-submenu">
                                    <ul className="tt-ol-submenu-list">
                                      <li>
                                        <a href="portfolio-list-classic.html">
                                          List Classic
                                        </a>
                                      </li>
                                      <li>
                                        <a href="portfolio-list-overlay.html">
                                          List Overlay
                                        </a>
                                      </li>
                                      <li>
                                        <a href="portfolio-list-compact.html">
                                          List Compact
                                        </a>
                                      </li>
                                    </ul>{" "}
                                    {/* /.tt-ol-submenu-list */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu */}
                                </li>
                                {/* End submenu */}
                                {/* Begin submenu
                                              =================== */}
                                <li className="tt-ol-submenu-wrap">
                                  <div className="tt-ol-submenu-trigger">
                                    <a href="#" className="tt-ol-submenu-link">
                                      Portfolio Grid
                                    </a>
                                    <div className="tt-ol-submenu-caret-wrap">
                                      <div className="tt-ol-submenu-caret magnetic-item" />
                                    </div>{" "}
                                    {/* /.tt-ol-submenu-caret-wrap */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu-trigger */}
                                  <div className="tt-ol-submenu">
                                    <ul className="tt-ol-submenu-list">
                                      <li>
                                        <a href="portfolio-grid-creative-1.html">
                                          Grid Creative v.1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="portfolio-grid-creative-2.html">
                                          Grid Creative v.2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="portfolio-grid-modern.html">
                                          Grid Modern
                                        </a>
                                      </li>
                                      <li>
                                        <a href="portfolio-grid-classic.html">
                                          Grid Classic
                                        </a>
                                      </li>
                                      <li>
                                        <a href="portfolio-grid-portrait-mode.html">
                                          Portrait Mode
                                        </a>
                                      </li>
                                      <li>
                                        <a href="portfolio-one-column.html">
                                          One Column
                                        </a>
                                      </li>
                                    </ul>{" "}
                                    {/* /.tt-ol-submenu-list */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu */}
                                </li>
                                {/* End submenu */}
                                {/* Begin submenu
                                              =================== */}
                                <li className="tt-ol-submenu-wrap">
                                  <div className="tt-ol-submenu-trigger">
                                    <a href="#" className="tt-ol-submenu-link">
                                      Slider &amp; Carousel
                                    </a>
                                    <div className="tt-ol-submenu-caret-wrap">
                                      <div className="tt-ol-submenu-caret magnetic-item" />
                                    </div>{" "}
                                    {/* /.tt-ol-submenu-caret-wrap */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu-trigger */}
                                  <div className="tt-ol-submenu">
                                    <ul className="tt-ol-submenu-list">
                                      <li>
                                        <a href="portfolio-fullscreen-slider.html">
                                          Fullscreen Slider
                                        </a>
                                      </li>
                                      <li>
                                        <a href="portfolio-carousel-overlay.html">
                                          Carousel Overlay
                                        </a>
                                      </li>
                                      <li>
                                        <a href="portfolio-carousel-center.html">
                                          Carousel Center
                                        </a>
                                      </li>
                                    </ul>{" "}
                                    {/* /.tt-ol-submenu-list */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu */}
                                </li>
                                {/* End submenu */}
                                <li>
                                  <a href="portfolio-interactive.html">
                                    Interactive
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-interactive-compact.html">
                                    Interactive Compact
                                  </a>
                                </li>
                                <li>
                                  <a href="elements-classic-menu.html">
                                    Classic Menu
                                  </a>
                                </li>
                              </ul>{" "}
                              {/* /.tt-ol-submenu-list */}
                            </div>{" "}
                            {/* /.tt-ol-submenu */}
                          </li>
                          {/* End submenu (sub-master) */}
                          {/* Begin submenu (submenu master)
                                  ==================================== */}
                          <li className="tt-ol-submenu-wrap">
                            <div className="tt-ol-submenu-trigger">
                              <a href="#">About</a>
                              <div className="tt-ol-submenu-caret-wrap">
                                <div className="tt-ol-submenu-caret magnetic-item" />
                              </div>{" "}
                              {/* /.tt-ol-submenu-caret-wrap */}
                            </div>{" "}
                            {/* /.tt-ol-submenu-trigger */}
                            <div className="tt-ol-submenu">
                              <ul className="tt-ol-submenu-list">
                                <li>
                                  <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                  <a href="about-me.html">About Me</a>
                                </li>
                              </ul>{" "}
                              {/* /.tt-ol-submenu-list */}
                            </div>{" "}
                            {/* /.tt-ol-submenu */}
                          </li>
                          {/* End submenu (sub-master) */}
                          {/* Begin submenu (submenu master)
                                  ==================================== */}
                          <li className="tt-ol-submenu-wrap">
                            <div className="tt-ol-submenu-trigger">
                              <a href="#">Blog</a>
                              <div className="tt-ol-submenu-caret-wrap">
                                <div className="tt-ol-submenu-caret magnetic-item" />
                              </div>{" "}
                              {/* /.tt-ol-submenu-caret-wrap */}
                            </div>{" "}
                            {/* /.tt-ol-submenu-trigger */}
                            <div className="tt-ol-submenu">
                              <ul className="tt-ol-submenu-list">
                                {/* Begin submenu
                                              =================== */}
                                <li className="tt-ol-submenu-wrap">
                                  <div className="tt-ol-submenu-trigger">
                                    <a href="#" className="tt-ol-submenu-link">
                                      Blog List
                                    </a>
                                    <div className="tt-ol-submenu-caret-wrap">
                                      <div className="tt-ol-submenu-caret magnetic-item" />
                                    </div>{" "}
                                    {/* /.tt-ol-submenu-caret-wrap */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu-trigger */}
                                  <div className="tt-ol-submenu">
                                    <ul className="tt-ol-submenu-list">
                                      <li>
                                        <a href="blog-interactive.html">
                                          Interactive List
                                        </a>
                                      </li>
                                      <li>
                                        <a href="blog-list.html">
                                          Compact List
                                        </a>
                                      </li>
                                      <li>
                                        <a href="blog-classic.html">
                                          Classic List
                                        </a>
                                      </li>
                                      <li>
                                        <a href="blog-classic-sidebar.html">
                                          Classic Sidebar
                                        </a>
                                      </li>
                                    </ul>{" "}
                                    {/* /.tt-ol-submenu-list */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu */}
                                </li>
                                {/* End submenu */}
                                {/* Begin submenu
                                              =================== */}
                                <li className="tt-ol-submenu-wrap">
                                  <div className="tt-ol-submenu-trigger">
                                    <a href="#" className="tt-ol-submenu-link">
                                      Blog Post
                                    </a>
                                    <div className="tt-ol-submenu-caret-wrap">
                                      <div className="tt-ol-submenu-caret magnetic-item" />
                                    </div>{" "}
                                    {/* /.tt-ol-submenu-caret-wrap */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu-trigger */}
                                  <div className="tt-ol-submenu">
                                    <ul className="tt-ol-submenu-list">
                                      <li>
                                        <a href="blog-post.html">Single Post</a>
                                      </li>
                                      <li>
                                        <a href="blog-post-classic-sidebar.html">
                                          Classic Sidebar
                                        </a>
                                      </li>
                                    </ul>{" "}
                                    {/* /.tt-ol-submenu-list */}
                                  </div>{" "}
                                  {/* /.tt-ol-submenu */}
                                </li>
                                {/* End submenu */}
                              </ul>{" "}
                              {/* /.tt-ol-submenu-list */}
                            </div>{" "}
                            {/* /.tt-ol-submenu */}
                          </li>
                          {/* End submenu (sub-master) */}
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                        {/* End menu list */}
                      </div>{" "}
                      {/* /.tt-ol-menu-content */}
                    </div>{" "}
                    {/* /.tt-ol-menu-inner */}
                  </div>{" "}
                  {/* /.tt-ol-menu-holder */}
                  {/* Begin noise background */}
                  <div className="bg-noise" />
                  {/* End noise background */}
                </nav>
                {/* End overlay menu */}
              </div>{" "}
              {/* /.header-col */}
            </div>{" "}
            {/* /.header-inner */}
          </header>
          {/* End header */}
          {/* *************************************
           *********** Begin content wrap ***********
           ************************************** */}
          <div id="content-wrap">
            {/* ========================
      ///// Begin page header /////
      ============================= 
      * Use class "ph-full" to enable fullscreen size.
      * Use class "ph-cap-sm", "ph-cap-lg", "ph-cap-xlg" or "ph-cap-xxlg" to set caption size (no class = default size).
      * Use class "ph-center" to enable content center position.
      * Use class "ph-bg-image" to enable page header background image (required for a portfolio single project!).
      * Use class "ph-bg-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image (effect only with class "ph-bg-image").
      * Use class "ph-image-shadow" to enable page header background image (effect only with class "ph-bg-image").
      * Use class "ph-image-cropped" to crop image. It fixes image dimensions (no effect for "ph-bg-image"!).
      * Use class "ph-image-cover-*" to set image overlay opacity. For example "ph-image-cover-2" or "ph-image-cover-2-5" (up to "ph-image-cover-9-5").
      * Use class "ph-content-parallax" to enable content parallax.
      * Use class "ph-stroke" to enable caption title stroke style.
      */}
            <div
              id="page-header"
              className="ph-full ph-cap-sm ph-image-cropped ph-image-cover-2 ph-content-parallax"
            >
              <div className="page-header-inner tt-wrap">
                {/* Begin page header image 
              ============================= */}
                <div className="ph-image">
                  <div className="ph-image-inner">
                    <img src="assets/img/page-header/ph-6.jpg" alt="Image" />
                  </div>
                </div>
                {/* End page header image */}
                {/* Begin page header caption
              =============================== 
              Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
              */}
                <div className="ph-caption max-width-1000">
                  <h1 className="ph-caption-title ph-appear font-normal">
                    <em>Hello stranger!</em>
                    <br /> We are a creative design agency based in Melbourne.
                    We bring your{" "}
                    <em>
                      <u>ideas</u>
                    </em>{" "}
                    to life.
                  </h1>
                  <div className="ph-caption-title-ghost ph-appear">Hello!</div>
                  {/* <div class="ph-caption-subtitle ph-appear">Subtitle</div> */}
                </div>
                {/* End page header caption */}
              </div>{" "}
              {/* /.page-header-inner */}
              {/* Begin scroll down circle (you can change "data-offset" to set scroll top offset) 
          ============================== */}
              <a
                href="#page-content"
                className="scroll-down-circle"
                data-offset={30}
              >
                <div className="sdc-inner ph-appear">
                  <div className="sdc-icon">
                    <i className="fas fa-chevron-down" />
                  </div>
                  <svg viewBox="0 0 500 500">
                    <defs>
                      <path
                        d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                        id="textcircle"
                      />
                    </defs>
                    <text dy={30}>
                      <textPath xlinkHref="#textcircle">
                        Scroll down - Scroll down -
                      </textPath>
                    </text>
                  </svg>
                </div>{" "}
                {/* /.sdc-inner */}
              </a>
              {/* End scroll down circle */}
              {/* Begin made with love 
          ========================== */}
              <div className="made-with-love ph-appear">
                <div className="mwl-inner">
                  <div className="mwl-text">Made with</div>
                  <div className="mwl-icon">
                    <i className="far fa-heart" />
                  </div>
                </div>
              </div>
              {/* End made with love */}
            </div>
            {/* End page header */}
            {/* *************************************
             *********** Begin page content ***********
             ************************************** */}
            <div id="page-content">
              {/* =======================
          ///// Begin tt-section /////
          ============================ 
          * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
          */}
              <div className="tt-section padding-bottom-xlg-150">
                <div className="tt-section-inner tt-wrap">
                  {/* Begin tt-Heading 
                  ====================== 
                  * Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
                  * Use class "tt-heading-stroke" to enable stroke style.
                  * Use class "tt-heading-center" to align tt-Heading to center.
                  * Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
                  */}
                  <div className="tt-heading tt-heading-center tt-heading-lg margin-bottom-10-p anim-fadeinup">
                    <h3 className="tt-heading-subtitle text-gray">
                      Latest Projects
                    </h3>
                    <h2 className="tt-heading-title">Works</h2>
                    <div className="tt-btn tt-btn-link margin-top-20">
                      <a
                        href="portfolio-interactive-compact.html"
                        data-hover="See All Works"
                      >
                        See All Works
                      </a>
                    </div>
                  </div>
                  {/* End tt-Heading */}
                  {/* Begin portfolio interactive 
                  =================================
                  * Use class "pi-compact" to enable compact style.
                  * Use class "pi-borders" to enable borders.
                  * Use class "pi-stroke" to enable title stroke style.
                  * Use class "pi-force-scroll" to also force shorter hover titles to scroll. Note: If "pi-item-title" text is wider than "pi-item-title-link" then hover title scrolls by default (the longer the text, the faster it scrolls). You may need to adjust the "data-scroll-speed" attribute on each item separately to find a suitable speed. No effect on mobile devices!
                  */}
                  <div className="portfolio-interactive pi-borders pi-compact pi-force-scroll">
                    {/* Begin portfolio interactive item 
                      ====================================== 
                      * Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
                      */}
                    <div
                      className="portfolio-interactive-item anim-skewinup"
                      data-scroll-speed={3}
                    >
                      <a
                        href="single-project-1.html"
                        className="pi-item-title-link"
                      >
                        <h2 className="pi-item-title">Victorian Girls</h2>
                        <div className="pi-item-hover-title">
                          Victorian Girls
                        </div>
                      </a>
                      <div className="pi-item-category-wrap">
                        <div className="pi-item-category">People</div>
                        {/* <div class="pi-item-category">Varia</div> */}
                      </div>
                      <figure className="pi-item-image cover-opacity-2">
                        <img
                          src="assets/img/portfolio/portfolio-1.jpg"
                          alt="image"
                        />
                      </figure>
                    </div>
                    {/* End portfolio interactive item */}
                    {/* Begin portfolio interactive item 
                      ====================================== 
                      * Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
                      */}
                    <div
                      className="portfolio-interactive-item anim-skewinup"
                      data-scroll-speed={2}
                    >
                      <a
                        href="single-project-2.html"
                        className="pi-item-title-link"
                      >
                        <h2 className="pi-item-title">Smithy</h2>
                        <div className="pi-item-hover-title">Smithy</div>
                      </a>
                      <div className="pi-item-category-wrap">
                        <div className="pi-item-category">Creative</div>
                        {/* <div class="pi-item-category">Varia</div> */}
                      </div>
                      <figure className="pi-item-image cover-opacity-2">
                        <img
                          src="assets/img/portfolio/portfolio-2.jpg"
                          alt="image"
                        />
                      </figure>
                    </div>
                    {/* End portfolio interactive item */}
                    {/* Begin portfolio interactive item 
                      ====================================== 
                      * Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
                      */}
                    <div
                      className="portfolio-interactive-item anim-skewinup"
                      data-scroll-speed={3}
                    >
                      <a
                        href="single-project-3.html"
                        className="pi-item-title-link"
                      >
                        <h2 className="pi-item-title">Fashion Week</h2>
                        <div className="pi-item-hover-title">Fashion Week</div>
                      </a>
                      <div className="pi-item-category-wrap">
                        <div className="pi-item-category">People</div>
                        {/* <div class="pi-item-category">Varia</div> */}
                      </div>
                      <figure className="pi-item-image cover-opacity-2">
                        <video
                          className="pi-item-video"
                          loop
                          muted
                          preload="metadata"
                          poster="assets/vids/fashion-week.jpg"
                        >
                          <source
                            src="assets/vids/fashion-week.mp4"
                            type="video/mp4"
                          />
                          <source
                            src="assets/vids/fashion-week.webm"
                            type="video/webm"
                          />
                        </video>
                      </figure>
                    </div>
                    {/* End portfolio interactive item */}
                    {/* Begin portfolio interactive item 
                      ====================================== 
                      * Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
                      */}
                    <div
                      className="portfolio-interactive-item anim-skewinup"
                      data-scroll-speed={3}
                    >
                      <a
                        href="single-project-4.html"
                        className="pi-item-title-link"
                      >
                        <h2 className="pi-item-title">Mystery Forest</h2>
                        <div className="pi-item-hover-title">
                          Mystery Forest
                        </div>
                      </a>
                      <div className="pi-item-category-wrap">
                        <div className="pi-item-category">Nature</div>
                        {/* <div class="pi-item-category">Varia</div> */}
                      </div>
                      <figure className="pi-item-image cover-opacity-2">
                        <img
                          src="assets/img/portfolio/portfolio-3.jpg"
                          alt="image"
                        />
                      </figure>
                    </div>
                    {/* End portfolio interactive item */}
                    {/* Begin portfolio interactive item 
                      ====================================== 
                      * Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
                      */}
                    <div
                      className="portfolio-interactive-item anim-skewinup"
                      data-scroll-speed={3}
                    >
                      <a
                        href="single-project-5.html"
                        className="pi-item-title-link"
                      >
                        <h2 className="pi-item-title">Red Package</h2>
                        <div className="pi-item-hover-title">Red Package</div>
                      </a>
                      <div className="pi-item-category-wrap">
                        <div className="pi-item-category">Branding</div>
                        {/* <div class="pi-item-category">Varia</div> */}
                      </div>
                      <figure className="pi-item-image cover-opacity-2">
                        <img
                          src="assets/img/portfolio/portfolio-4.jpg"
                          alt="image"
                        />
                      </figure>
                    </div>
                    {/* End portfolio interactive item */}
                  </div>
                  {/* End portfolio interactive */}
                </div>{" "}
                {/* /.tt-section-inner */}
              </div>
              {/* End tt-section */}
              {/* =======================
          ///// Begin tt-section /////
          ============================ 
          * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
          */}
              <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-100 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-3">
                <div className="tt-section-inner tt-wrapp">
                  {/* Begin testimonials slider 
                  ===============================
                  * Use class "text-center" to align text to the center.
                  * Use class "cursor-drag" to enable cursor drag on carousel hover ("data-simulate-touch" attribute must be enabled!).
                  * Use class "ts-hide-pagination" to hide pagination (for desktop only!).
                  * Use class "ts-hide-navigation" to hide navigation arrows.
                  * Use class "ts-full-width" to enable full width slider.
                  * Available data attributes:
                          data-speed="900"......................(milliseconds)
                          data-autoplay="5000"..................(milliseconds. Note: disabled after user first interactions)
                          data-simulate-touch="true"............(true/false)
                          data-loop="true"......................(true/false)
                  */}
                  <div
                    className="tt-testimonials-slider ts-full-width text-center cursor-drag ts-scale-down ts-hide-navigation anim-fadeinup"
                    data-loop="true"
                    data-simulate-touch="true"
                    data-speed={900}
                  >
                    {/* Begin swiper container */}
                    <div className="swiper-container">
                      {/* Begin swiper wrapper (required) */}
                      <div className="swiper-wrapper">
                        {/* Begin swiper slide 
                              ======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "One of the best template I've ever had. I love
                              it! It's fully customizable, well coded, fast and
                              responsive - fitting for all kind of devices."
                            </div>
                            <div className="tt-ts-subtext">- Wironimo</div>
                          </div>
                        </div>
                        {/* End swiper slide */}
                        {/* Begin swiper slide 
                              ======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "Brilliant template. Tons of options, many
                              concepts, design flexibility, code quality,
                              explanatory comments in each section for easy
                              styling."
                            </div>
                            <div className="tt-ts-subtext">- Gneto</div>
                          </div>
                        </div>
                        {/* End swiper slide */}
                        {/* Begin swiper slide 
                              ======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "Easy to customize, plenty of choices to display
                              your portfolio, fast loading times. Excellent
                              support."
                            </div>
                            <div className="tt-ts-subtext">- Brendak</div>
                          </div>
                        </div>
                        {/* End swiper slide */}
                        {/* Begin swiper slide 
                              ======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "Very nice design and well organised and commented
                              code. Also good customer service."
                            </div>
                            <div className="tt-ts-subtext">- Gazzzzz</div>
                          </div>
                        </div>
                        {/* End swiper slide */}
                        {/* Begin swiper slide 
                              ======================== */}
                        <div className="swiper-slide font-alter">
                          <div className="tt-ts-item">
                            <div className="tt-ts-text">
                              "I founded a bug on Iphone and Ipad and the author
                              fixed very quickly. I appreciated his efforts and
                              his quickness in solving the problem."
                            </div>
                            <div className="tt-ts-subtext">- Admanente</div>
                          </div>
                        </div>
                        {/* End swiper slide */}
                      </div>
                      {/* End swiper wrapper */}
                    </div>
                    {/* End swiper container */}
                    {/* Testimonials slider navigation (arrows) */}
                    <div className="tt-ts-nav-prev">
                      <div className="tt-ts-nav-arrow magnetic-item" />
                    </div>
                    <div className="tt-ts-nav-next">
                      <div className="tt-ts-nav-arrow magnetic-item" />
                    </div>
                    {/* Testimonials slider pagination */}
                    <div className="tt-ts-pagination hide-cursor" />
                  </div>
                  {/* End testimonials slider */}
                </div>{" "}
                {/* /.tt-section-inner */}
              </div>
              {/* End tt-section */}
              {/* =======================
          ///// Begin tt-section /////
          ============================ 
          * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
          */}
              <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-150">
                <div className="tt-section-inner">
                  {/* Begin scrolling text
                  ========================== 
                  Change data-scroll-speed="*" to adjust scrolling speed.
                  Use class "scr-text-reverse" to reverse scrolling direction. 
                  Use class "scr-text-stroke" to enable text stroke style (no effect on smaller screens!). 
                  */}
                  <div
                    className="tt-scrolling-text scr-text-stroke font-italic anim-fadeinup"
                    data-scroll-speed={15}
                  >
                    <div
                      className="tt-scrolling-text-inner text-dark-3"
                      data-text="Let's create something awesome together! -"
                    >
                      Let's create something awesome together! -
                    </div>{" "}
                    {/* /.tt-scrolling-text-inner */}
                  </div>
                  {/* End scrolling text */}
                  {/* Begin scrolling text
                  ========================== 
                  Change data-scroll-speed="*" to adjust scrolling speed.
                  Use class "scr-text-reverse" to reverse scrolling direction. 
                  Use class "scr-text-stroke" to enable text stroke style (no effect on smaller screens!). 
                  */}
                  <div
                    className="tt-scrolling-text scr-text-stroke scr-text-reverse font-italic anim-fadeinup"
                    data-scroll-speed={15}
                  >
                    <div
                      className="tt-scrolling-text-inner text-dark-3"
                      data-text="Let's create something awesome together! -"
                    >
                      Let's create something awesome together! -
                    </div>{" "}
                    {/* /.tt-scrolling-text-inner */}
                  </div>
                  {/* End scrolling text */}
                </div>{" "}
                {/* /.tt-section-inner */}
              </div>
              {/* End tt-section */}
              {/* =======================
          ///// Begin tt-section /////
          ============================ 
          * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
          */}
              <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-3">
                <div className="tt-section-inner tt-wrap">
                  <div className="tt-row">
                    <div className="tt-col-lg-5 padding-right-lg-5-p">
                      {/* Begin tt-Heading 
                          ====================== 
                          * Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
                          * Use class "tt-heading-stroke" to enable stroke style.
                          * Use class "tt-heading-center" to align tt-Heading to center.
                          * Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
                          */}
                      <div className="tt-heading tt-heading-lg margin-bottom-10-p anim-fadeinup">
                        <h3 className="tt-heading-subtitle text-gray">
                          Get in Touch
                        </h3>
                        <h2 className="tt-heading-title">
                          Drop Us
                          <br /> A Line
                        </h2>
                      </div>
                      {/* End tt-Heading */}
                      {/* <div class="text-gray padding-bottom-40 anim-fadeinup">
                              <p>Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Molestias assumenda, ratione voluptatibus. Libero nisi laudantium.</p>
                          </div> */}
                      {/* Begin contact info 
                          ======================== */}
                      <ul className="tt-contact-info padding-bottom-40 text-gray">
                        <li className="anim-fadeinup">
                          <span className="tt-ci-icon">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          121 King Street, Melbourne, Australia
                        </li>
                        <li className="anim-fadeinup">
                          <span className="tt-ci-icon">
                            <i className="fas fa-phone" />
                          </span>
                          <a href="tel:+123456789000" className="tt-link">
                            +(123) 456 789 000
                          </a>
                        </li>
                        <li className="anim-fadeinup">
                          <span className="tt-ci-icon">
                            <i className="fas fa-envelope" />
                          </span>
                          <a
                            href="mailto:company@email.com"
                            className="tt-link"
                          >
                            company@email.com
                          </a>
                        </li>
                      </ul>
                      {/* End contact info */}
                    </div>{" "}
                    {/* /.tt-col */}
                    <div className="tt-col-lg-7">
                      {/* Begin form 
                          ================ 
                          * Use class "tt-form-filled" or "tt-form-minimal" to change form style.
                          * Use class "tt-form-sm" or "tt-form-lg" to change form size (no class = default size).
                          * Use class "tt-hide-labels" to to hide labels.
                          */}
                      <form
                        id="tt-contact-form"
                        className="tt-form-lg tt-form-minimal tt-hide-labels anim-fadeinup"
                      >
                        {/* Begin hidden required fields (https://github.com/agragregra/uniMail) */}
                        <input
                          type="hidden"
                          name="project_name"
                          defaultValue="yourwebsiteaddress.com"
                        />{" "}
                        {/* Change value to your site name */}
                        <input
                          type="hidden"
                          name="admin_email"
                          defaultValue="your@email.com"
                        />{" "}
                        {/* Change value to your valid email address (where a message will be sent) */}
                        <input
                          type="hidden"
                          name="form_subject"
                          defaultValue="Message from yourwebsiteaddress.com"
                        />{" "}
                        {/* Change value to your own message subject */}
                        {/* End Hidden Required Fields */}
                        <div className="tt-row">
                          <div className="tt-col-md-6">
                            <div className="tt-form-group">
                              <label>Name</label>
                              <input
                                className="tt-form-control"
                                type="text"
                                name="Name"
                                placeholder="Enter your name"
                                required
                              />
                            </div>
                          </div>{" "}
                          {/* /.tt-col */}
                          <div className="tt-col-md-6">
                            <div className="tt-form-group">
                              <label>Email address</label>
                              <input
                                className="tt-form-control"
                                type="email"
                                name="Email"
                                placeholder="Enter your email"
                                required
                              />
                            </div>
                          </div>{" "}
                          {/* /.tt-col */}
                        </div>{" "}
                        {/* /.tt-row */}
                        <div className="tt-form-group">
                          <label>Subject</label>
                          <input
                            className="tt-form-control"
                            type="text"
                            name="Subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        {/* <div class="tt-form-group">
                                  <label>Select an option</label>
                                  <select class="tt-form-control" name="Option" required>
                                      <option value="" disabled selected>Please choose an option</option>
                                      <option value="Say Hello">Say hello</option>
                                      <option value="New Project">New project</option>
                                      <option value="Feedback">Feedback</option>
                                      <option value="Other">Other</option>
                                  </select>
                              </div> */}
                        <div className="tt-form-group">
                          <label>Message</label>
                          <textarea
                            className="tt-form-control"
                            rows={7}
                            name="Message"
                            placeholder="What's in your mind?"
                            required
                            defaultValue={""}
                          />
                          <small className="tt-form-text">
                            <em>* All fields are required!</em>
                          </small>
                        </div>
                        <div className="tt-btn tt-btn-light-outline">
                          <button type="submit" data-hover="Send Message">
                            Send Message
                          </button>
                        </div>
                      </form>
                      {/* End form */}
                    </div>{" "}
                    {/* /.tt-col */}
                  </div>{" "}
                  {/* /.tt-row */}
                </div>{" "}
                {/* /.tt-section-inner */}
              </div>
              {/* End tt-section */}
            </div>
            {/* End page content */}
            {/* ======================
      ///// Begin tt-footer /////
      =========================== */}
            <footer id="tt-footer">
              <div className="tt-footer-inner">
                {/* Begin footer column 
              ========================= */}
                <div className="footer-col tt-align-center-left">
                  <div className="footer-col-inner">
                    {/* You can use whatever button or link here */}
                    <div className="tt-btn tt-btn-link">
                      <a
                        href="#"
                        className="scroll-to-top"
                        data-hover="Back to top"
                      >
                        Back to top
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.footer-col-inner */}
                </div>
                {/* Begin footer column */}
                {/* Begin footer column 
              ========================= */}
                <div className="footer-col tt-align-center order-m-last">
                  <div className="footer-col-inner">
                    <div className="tt-copyright">
                      © Copyright -{" "}
                      <a
                        href="https://themetorium.net"
                        target="_blank"
                        rel="noopener"
                        className="tt-link"
                      >
                        Themetorium.net
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.footer-col-inner */}
                </div>
                {/* Begin footer column */}
                {/* Begin footer column 
              ========================= */}
                <div className="footer-col tt-align-center-right">
                  <div className="footer-col-inner">
                    <div className="footer-social">
                      <div className="footer-social-text">
                        <span>Follow</span>
                        <i className="fas fa-share-alt" />
                      </div>
                      <div className="social-buttons">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/themetorium"
                              className="magnetic-item"
                              target="_blank"
                              rel="noopener"
                            >
                              Fb.
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/Themetorium"
                              className="magnetic-item"
                              target="_blank"
                              rel="noopener"
                            >
                              Tw.
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/"
                              className="magnetic-item"
                              target="_blank"
                              rel="noopener"
                            >
                              Yt.
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://dribbble.com/Themetorium"
                              className="magnetic-item"
                              target="_blank"
                              rel="noopener"
                            >
                              Dr.
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.behance.net/Themetorium"
                              className="magnetic-item"
                              target="_blank"
                              rel="noopener"
                            >
                              Be.
                            </a>
                          </li>
                        </ul>
                      </div>{" "}
                      {/* /.social-buttons */}
                    </div>{" "}
                    {/* /.footer-social */}
                  </div>{" "}
                  {/* /.footer-col-inner */}
                </div>
                {/* Begin footer column */}
              </div>{" "}
              {/* /.tt-section-inner */}
            </footer>
            {/* End tt-footer */}
          </div>
          {/* End content wrap */}
        </div>
        {/* End scroll container */}
      </main>
    </div>
  );
};

export default Home;
