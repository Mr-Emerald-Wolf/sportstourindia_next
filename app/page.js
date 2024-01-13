import Image from "next/image";
// pages/_app.js or pages/_app.tsx (for global styles)
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.css';
// import 'jquery-ui-dist/jquery-ui.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import "./assets/vendors/fancybox/dist/jquery.fancybox.min.css";
import "./assets/vendors/fontawesome/css/all.min.css";
import "./assets/vendors/elementskit-icon-pack/assets/css/ekiticons.css";
import "./assets/vendors/slick/slick.css";
import "./assets/vendors/slick/slick-theme.css";
import "./assets/style.css";
import bg1 from "./assets/images/banner-img1.jpg";
import bg2 from "./assets/images/img7.jpg";
import bg3 from "./assets/images/img1.jpg";
import bg4 from "./assets/images/img2.jpg";

// Your custom _app.js or _app.tsx content...

export default function Home() {
  return (
    <div className="home">
      {/* <div id="siteLoader" className="site-loader">
        <div className="preloader-content">
          <img src="/assets/images/loader1.gif" alt="" />
        </div>
      </div> */}
      <div id="page" className="page">
        {/* <!-- site header html end  --> */}
        <main id="content" className="site-main">
          {/* <!-- ***home banner html start form here*** --> */}
          <section className="home-banner-section home-banner-slider">
            <div
              className="home-banner d-flex flex-wrap align-items-center"
              style={{
                backgroundImage: `url(${bg1.src})`,
              }}
            >
              <div className="overlay"></div>
              <div className="container">
                <div className="banner-content text-center">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <h2 className="banner-title">
                        Life Begins At The End Of Your Comfort Zone
                      </h2>
                      <p>
                        It’s hard to get anything other than cliches out of
                        athletes.
                      </p>
                      <div className="banner-btn">
                        <a
                          href="<?= base_url() ?>about-us"
                          className="round-btn"
                        >
                          LEARN MORE
                        </a>
                        <a
                          href="<?= base_url() ?>packages"
                          className="outline-btn outline-btn-white"
                        >
                          BOOK NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="home-banner d-flex flex-wrap align-items-center"
              style={{
                backgroundImage: `url(${bg2.src})`,
              }}
            >
              <div className="overlay"></div>
              <div className="container">
                <div className="banner-content text-center">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <h2 className="banner-title">BEAUTIFUL PLACE TO VISIT</h2>
                      {/* <!--<p>Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis
                                    nostra rem quos voluptatibus habitant? Fames, vivamus minim nemo enim, gravida
                                    lobortis quasi, eum.</p>--> */}
                      <div className="banner-btn">
                        <a
                          href="<?= base_url() ?>about-us"
                          className="round-btn"
                        >
                          LEARN MORE
                        </a>
                        <a
                          href="<?= base_url() ?>packages"
                          className="outline-btn outline-btn-white"
                        >
                          BOOK NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ***home banner html end here*** --> */}

          {/* <!-- ***Home destination html start from here*** --> */}
          <section className="home-destination">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-sm-center">
                  <div className="section-heading">
                    <h5 className="sub-title">UNCOVER EVENT</h5>
                    <h2 className="section-title">UPCOMING EVENTS</h2>
                    {/* <!--<p>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum
                                cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>--> */}
                  </div>
                </div>
              </div>
              <div className="destination-section">
                <div className="row">
                  <div className="col-lg-3 col-md-3"></div>
                  <div className="col-lg-6 col-md-6">
                    <article
                      className="destination-item"
                      style={{
                        backgroundImage: `url(${bg3.src})`,
                      }}
                    >
                      <div className="destination-content">
                        <div className="rating-start-wrap">
                          <div className="text-white">
                            <p>5 OCTOBER TO 19 NOVEMBER 2023</p>
                          </div>
                        </div>
                        <span className="cat-link">
                          <a>CRICKET</a>
                        </span>
                        <h3>
                          <a href="<?= base_url() ?>event-details">
                            ICC MEN'S CRICKET WORLD CUP - INDIA 2023
                          </a>
                        </h3>
                        <p>
                          INDIA INDIA !! INDIA INDIA these cheers reverberated
                          at MUMBAI twleve years back.{" "}
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <article
                      className="destination-item"
                      style={{
                        backgroundImage: `url(${bg4.src})`,
                      }}
                    >
                      <div className="destination-content">
                        <div className="rating-start-wrap">
                          <div className="text-white">
                            <p>3 – 21 DECEMBER 2023</p>
                          </div>
                        </div>
                        <span className="cat-link">
                          <a>Cricket</a>
                        </span>
                        <h3>
                          <a href="<? /*= base_url() */ ?>event-details">
                            England Cricket Tour to the West Indies – ODI & T20
                            Series 2023
                          </a>
                        </h3>
                        <p>
                          Travel to the Caribbean to see England return to the
                          West Indies in late 2023 for an eight-match...
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="section-btn-wrap text-center">
                  <a href="<?= base_url() ?>events" className="round-btn">
                    More Events
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ***Home destination html end here*** --> */}
          {/* <!-- ***Home callback html start from here*** --> */}
          <section
            className="home-callback bg-img-fullcallback"
            style={{
              backgroundImage: `url(${bg2.src})`,
            }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <div className="callback-content">
                    <div className="video-button">
                      <a
                        id="video-container"
                        data-fancybox="video-gallery"
                        href="https://www.youtube.com/watch?v=7iC1XvYJSFs"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                    <h2 className="section-title">
                      ARE YOU READY TO TRAVEL? REMEMBER US !!
                    </h2>
                    <p>
                      Fusce hic augue velit wisi quibusdam pariatur, iusto
                      primis, nec nemo, rutrum. Vestibulum cumque laudantium.
                      Sit ornare mollitia tenetur, aptent.
                    </p>
                    <div className="callback-btn">
                      <a href="<?= base_url() ?>packages" className="round-btn">
                        View Packages
                      </a>
                      <a
                        href="<?= base_url() ?>about-us"
                        className="outline-btn outline-btn-white"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ***Home callback html end here*** -->
        <!-- ***Home counter html start from here*** --> */}
          <div className="home-counter">
            <div className="container">
              <div className="counter-wrap">
                <div className="counter-item">
                  <span className="counter-no">
                    <span className="counter">80</span>K+
                  </span>
                  <span className="counter-desc">SATISFIED CUSTOMER</span>
                </div>
                <div className="counter-item">
                  <span className="counter-no">
                    <span className="counter">18</span>+
                  </span>
                  <span className="counter-desc">ACTIVE MEMBERS</span>
                </div>
                <div className="counter-item">
                  <span className="counter-no">
                    <span className="counter">220</span>+
                  </span>
                  <span className="counter-desc">TOUR DESTINATION</span>
                </div>
                <div className="counter-item">
                  <span className="counter-no">
                    <span className="counter">75</span>+
                  </span>
                  <span className="counter-desc">TRAVEL GUIDES</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ***Home counter html end here*** --> */}
          <div className="home-destination">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <div className="section-heading">
                    <h5 className="sub-title">BENEFITS FROM US</h5>
                    <h2 className="section-title">WHY CHOOSE US !</h2>
                    <p>
                      Fusce hic augue velit wisi quibusdam pariatur, iusto
                      primis, nec nemo, rutrum. Vestibulum cumque laudantium.
                      Sit ornare mollitia tenetur, aptent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="icon-box bg-color-box">
                    <div className="box-icon">
                      <i className="fas fa-hand-holding-usd"></i>
                    </div>
                    <div className="icon-box-content">
                      <h4>FINANCIAL SECURITY</h4>
                      <p>
                        Veritatis laudantium, ullamco congue ad, cum condimentum
                        nonummy atque.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="icon-box bg-color-box">
                    <div className="box-icon">
                      <i className="fas fa-ticket-alt"></i>
                    </div>
                    <div className="icon-box-content">
                      <h4>GUARANTEED TICKET</h4>
                      <p>
                        Veritatis laudantium, ullamco congue ad, cum condimentum
                        nonummy atque.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="icon-box bg-color-box">
                    <div className="box-icon">
                      <i className="fas fa-award"></i>
                    </div>
                    <div className="icon-box-content">
                      <h4>EXPERIENCE IN THE GAME</h4>
                      <p>
                        Veritatis laudantium, ullamco congue ad, cum condimentum
                        nonummy atque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ***Home callback html start from here*** --> */}
          <section className="home-callback bg-color-callback primary-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h5 className="sub-title">CALL TO ACTION</h5>
                  <h2 className="section-title">
                    READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!
                  </h2>
                  <p>
                    Fusce hic augue velit wisi quibusdam pariatur, iusto primis,
                    nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare
                    mollitia tenetur, aptent.
                  </p>
                </div>
                <div className="col-md-4 text-md-end">
                  <a
                    href="<?= base_url() ?>contact-us"
                    className="outline-btn outline-btn-white"
                  >
                    Contact Us !
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ***Home callback html end here*** -->
        <!-- ***Home testimonial html start from here*** --> */}
          <section className="home-destination">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <div className="section-heading">
                    <h5 className="sub-title">CLIENT'S REVIEWS</h5>
                    <h2 className="section-title">TRAVELLER'S TESTIMONIAL</h2>
                    <p>
                      Fusce hic augue velit wisi quibusdam pariatur, iusto
                      primis, nec nemo, rutrum. Vestibulum cumque laudantium.
                      Sit ornare mollitia tenetur, aptent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-section testimonial-slider">
                <div className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="rating-start-wrap">
                      <div className="rating-start">
                        <span styles="width: 80%"></span>
                      </div>
                    </div>
                    <p>
                      One of my favorite vacation memories was created by Sports
                      Tour India.
                    </p>
                    <div className="author-content">
                      <figure className="testimonial-img">
                        <img src="/assets/images/img18.jpg" alt="" />
                      </figure>
                      <div className="author-name">
                        <h5>JUSTIN</h5>
                        <span>TRAVELLERS</span>
                      </div>
                    </div>
                    <div className="testimonial-icon">
                      <i aria-hidden="true" className="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="rating-start-wrap">
                      <div className="rating-start">
                        <span styles="width: 80%"></span>
                      </div>
                    </div>
                    <p>We took only memories and left only our footprints.</p>
                    <div className="author-content">
                      <figure className="testimonial-img">
                        <img src="/assets/images/img19.jpg" alt="" />
                      </figure>
                      <div className="author-name">
                        <h5>SHYLA</h5>
                        <span>TRAVELLERS</span>
                      </div>
                    </div>
                    <div className="testimonial-icon">
                      <i aria-hidden="true" className="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="rating-start-wrap">
                      <div className="rating-start">
                        <span styles="width: 80%"></span>
                      </div>
                    </div>
                    <p>
                      I still can't get my mind off of those memories while I am
                      working in my office or mowing my lawn.
                    </p>
                    <div className="author-content">
                      <figure className="testimonial-img">
                        <img src="/assets/images/img20.jpg" alt="" />
                      </figure>
                      <div className="author-name">
                        <h5>RUPINDER</h5>
                        <span>TRAVELLERS</span>
                      </div>
                    </div>
                    <div className="testimonial-icon">
                      <i aria-hidden="true" className="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="rating-start-wrap">
                      <div className="rating-start">
                        <span styles="width: 80%"></span>
                      </div>
                    </div>
                    <p>
                      Nothing beats the feeling of finding yourself at large in
                      a foreign city on a fair spring evening.
                    </p>
                    <div className="author-content">
                      <figure className="testimonial-img">
                        <img src="/assets/images/img21.jpg" alt="" />
                      </figure>
                      <div className="author-name">
                        <h5>ANGEE</h5>
                        <span>TRAVELLERS</span>
                      </div>
                    </div>
                    <div className="testimonial-icon">
                      <i aria-hidden="true" className="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ***Home testimonial html end here*** --> */}
        </main>
        {/* <!-- ***site footer html start form here*** --> */}
        <a id="backTotop" href="#" className="to-top-icon">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
}
