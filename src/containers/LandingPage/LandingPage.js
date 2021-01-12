import React from "react";

import Header from "../../components/Header/Header";
import HeaderImage from "../../components/Header/HeaderImage/HeaderImage";

import "./LandingPage.scss";

import ingredientsImage from "../../assets/bakersIngredients.png";
import landingImage1 from "../../assets/landing1.png";
import landingImage2 from "../../assets/landing2.png";
import trigoOutside from "../../assets/trigoOutside.png";
import carousel1 from "../../assets/carousel/carousel1.png";
import carousel2 from "../../assets/carousel/carousel2.png";
import carousel3 from "../../assets/carousel/carousel3.png";
import carousel4 from "../../assets/carousel/carousel4.png";
import Footer from "../../components/Footer/Footer";
import grains from '../../assets/Grains.png';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeaderImage />
      <div className="landing-section color">
        <div className="content" id="bread-row">
          <div className="column" id="bread-description">
            <img src={grains} alt="grains" />
            <h1>Bread</h1>
            <p>
              Bread may be leavened by naturally occurring microbes, chemicals,
              industrially produced yeast, or high-pressure aeration. In many
              countries, commercial bread often contains additives to improve
              flavor, texture, color, shelf life, nutrition, and ease of
              production.
            </p>
          </div>
          <div className="column right" id="ingredients">
            <img src={ingredientsImage} alt="Various Baker's Ingredients" />
          </div>
        </div>
      </div>
      <div className="landing-section white">
        <div className="content">
          <div className="column">
            <div className="fresh-images">
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
          <div className="column" id="fresh-images-text">
            <h2>Made fresh every morning.</h2>
            <p>
              Bread may be leavened by naturally occurring microbes, chemicals,
              industrially produced yeast, or high-pressure aeration. In many
              countries, commercial bread often contains additives to improve
              flavor
            </p>
          </div>
        </div>
      </div>
      {/* <div className="landing-section color">
        <div className="content">
          <div className="column address">
            <div className="left">
              <p className="address-title">Where to find us</p>
              <h2>289 Dundas St E. Mississauga, ON L5A 1X1</h2>
              <hr />
              <p>
                or call us at <span>(905) 896-7245</span>
              </p>
            </div>
          </div>
          <div className="column">
            <div className="map">
              <iframe
                title="Trigo on Google Maps"
                width="595"
                height="694"
                frameborder="0"
                // style="border:0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJncRCmQFHK4gRGzsBpoT5mW8&key=AIzaSyC0iarw2tL_5dhFdhdMb87BO97VkxePfe8"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-section white">
        <div className="content">
          <div className="column hours-img-container">
            <div className="left">
              <img
                className="hours-img"
                alt="Outdoor Table"
                src={trigoOutside}
              />
            </div>
          </div>
          <div className="column hours-of-operation">
            <div className="right">
              <h2>We're up <br/> bright and early.</h2>
              <p className="hours">6:00AM - 7:00PM</p>
              <p className="days">Monday - Friday</p>
              <p className="hours">6:00AM - 5:00PM</p>
              <p className="days">Saturday - Sunday</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="landing-section white">
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
      </div> */}
      {/* <div className="landing-section white">
        <div className="carousel">
          <img src={carousel1} alt="pastries" />
          <img src={carousel2} alt="pastries" />
          <img src={carousel3} alt="pastries" />
          <img src={carousel4} alt="pastries" />
        </div>
        <div></div>
      </div> */}
      {/* <div className="landing-section white">
        <Footer landing={true} />
      </div> */}
    </div>
  );
};

export default LandingPage;
