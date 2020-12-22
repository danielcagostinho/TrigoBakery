import React from "react";

import Header from "../../components/Header/Header";

import "./LandingPage.scss";

import ingredientsImage from "../../assets/ingredients.png";
import landingImage1 from "../../assets/landing1.png";
import landingImage2 from "../../assets/landing2.png";
import trigoOutside from "../../assets/trigoOutside.png";
import carousel1 from "../../assets/carousel/carousel1.png";
import carousel2 from "../../assets/carousel/carousel2.png";
import carousel3 from "../../assets/carousel/carousel3.png";
import carousel4 from "../../assets/carousel/carousel4.png";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="section color">
        <div className="column">
          <div className="left">
            <h1>Bread</h1>
            <p>
              Bread may be leavened by naturally occurring microbes, chemicals,
              industrially produced yeast, or high-pressure aeration. In many
              countries, commercial bread often contains additives to improve
              flavor, texture, color, shelf life, nutrition, and ease of
              production.
            </p>
          </div>
        </div>
        <div className="column">
          <div>
            <img src={ingredientsImage} alt="Various Baker's Ingredients" />
          </div>
        </div>
      </div>
      <div className="section white">
        <div className="column">
          <div className="fresh-images left">
            <img
              className="fresh-img"
              alt="baker working"
              src={landingImage1}
            />
            <img
              className="fresh-img"
              alt="baker working"
              src={landingImage2}
            />
          </div>
        </div>
        <div className="column">
          <div className="right">
            <h2>Made fresh every morning.</h2>
            <p>
              Bread may be leavened by naturally occurring microbes, chemicals,
              industrially produced yeast, or high-pressure aeration. In many
              countries, commercial bread often contains additives to improve
              flavor, texture, color, shelf life, nutrition, and ease of
              production.
            </p>
          </div>
        </div>
      </div>
      <div className="section color">
        <div className="column address">
          <div className="left">
            <p>Where to find us</p>
            <h2>289 Dundas St E. Mississauga, ON L5A 1X1</h2>
            <p>or call us at (905) 896-7245</p>
          </div>
        </div>
        <div className="column">
          <div class="map">
            <iframe
              width="600"
              height="450"
              frameborder="0"
              // style="border:0"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJncRCmQFHK4gRGzsBpoT5mW8&key=AIzaSyC0iarw2tL_5dhFdhdMb87BO97VkxePfe8"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="section white">
        <div className="column hours-img-container">
          <div className="left">
            <img className="hours-img" alt="Outdoor Table" src={trigoOutside} />
          </div>
        </div>
        <div className="column hours-of-operation">
          <div className="right">
            <h2>We're up bright and early.</h2>
            <p className="hours">6:00AM - 7:00PM</p>
            <p className="days">Monday - Friday</p>
            <p className="hours">6:00AM - 5:00PM</p>
            <p className="days">Saturday - Sunday</p>
          </div>
        </div>
      </div>
      <div className="section white">
        <div className="insta">
          <h2>Check out</h2>
          <h2 className="insta-link">
            Trigo on{" "}
            <a
              href="https://www.instagram.com/trigobakeryinc/"
              target="_blank"
              rel="noreferrer"
            >
              instagram...
            </a>
          </h2>
        </div>
        <div></div>
      </div>
      <div className="section white">
        <div className="carousel">
          <img src={carousel1} alt="pastries" />
          <img src={carousel2} alt="pastries" />
          <img src={carousel3} alt="pastries" />
          <img src={carousel4} alt="pastries" />
        </div>
        <div></div>
      </div>
      <div className="section white">
        <div className="social-links">
          <p>
            <a>- Facebook Page</a>
          </p>
          <p>
            <a>- Email Trigo</a>
          </p>
          <p>
            <a>- Call Trigo</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
