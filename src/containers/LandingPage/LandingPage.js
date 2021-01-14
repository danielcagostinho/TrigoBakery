import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import HeaderImage from "../../components/Header/HeaderImage/HeaderImage";

import "./LandingPage2.scss";

import ingredientsImage from "../../assets/bakersIngredients.png";
import landingImage1 from "../../assets/landing1.png";
import landingImage2 from "../../assets/landing2.png";
import trigoOutside from "../../assets/trigoOutside.png";
import carousel1 from "../../assets/carousel/carousel1.png";
import carousel2 from "../../assets/carousel/carousel2.png";
import carousel3 from "../../assets/carousel/carousel3.png";
import carousel4 from "../../assets/carousel/carousel4.png";
import Footer from "../../components/Footer/Footer";
import grains from "../../assets/Grains.png";

const LandingPage = () => {
  let mapWidth = window.innerWidth * (window.innerWidth < 681 ? 0.8 : 0.4);
  let mapHeight = 1.23 * mapWidth;

  return (
    <div>
      <div className="content">
        <Header />
        <HeaderImage />
        <div className="section color" id="bread">
          <div className="row">
            <div className="column">
              <div>
                <h2>Bread</h2>
                <p>
                  Bread may be leavened by naturally occurring microbes,
                  chemicals, industrially produced yeast, or high-pressure
                  aeration. In many countries
                </p>
              </div>
            </div>
            <div className="column">
              {/* <img src={ingredientsImage} alt="Various Baker's Ingredients" /> */}
            </div>
          </div>
        </div>
        <div className="section white">
          <div className="row" id="fresh">
            <div className="column">
              <div id="fresh-images">
                <img alt="baker working" src={landingImage1} />
                <img alt="baker working" src={landingImage2} />
              </div>
            </div>
            <div className="column">
              <h3>Made fresh every morning.</h3>
              <p>
                Bread may be leavened by naturally occurring microbes,
                chemicals, industrially produced yeast
              </p>
            </div>
          </div>
        </div>
        <div className="section color">
          <div className="row" id="location">
            <div className="column">
              <p id="address-title">Where to find us</p>
              <h2>289 Dundas St E. Mississauga, ON L5A 1X1</h2>
              <hr />
              <p>
                or call us at <span>(905) 896-7245</span>
              </p>
            </div>
            <div className="column">
              <div id="map">
                <iframe
                  title="Trigo on Google Maps"
                  width={Math.min(mapWidth, 595)}
                  height={Math.min(mapHeight, 694)}
                  frameBorder="0"
                  // style="border:0"
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJncRCmQFHK4gRGzsBpoT5mW8&key=AIzaSyC0iarw2tL_5dhFdhdMb87BO97VkxePfe8"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="section white">
            <div className="row" id="hours-of-operation">
              <div className="column">
                <img id="hours-img" alt="Outdoor Table" src={trigoOutside} />
              </div>
              <div className="column">
                <div className="">
                  <h2>
                    We're up <br /> bright and early.
                  </h2>
                  <p className="hours">6:00AM - 7:00PM</p>
                  <h3 className="days">Monday - Friday</h3>
                  <p className="hours">6:00AM - 5:00PM</p>
                  <h3 className="days">Saturday - Sunday</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section white">
          <div className="row">
            <div id="insta">
              <h2>Check out</h2>
              <h2 id="insta-link">
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
          </div>
        </div>
        <div className="section white">
          <div className="row">
            <div id="carousel">
              <img src={carousel1} alt="pastries" />
              <img src={carousel2} alt="pastries" />
              <img src={carousel3} alt="pastries" />
              <img src={carousel4} alt="pastries" />
            </div>
          </div>
        </div>
      </div>

      {/* <Header />
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
            
          </div>
        </div>
      </div>

      <div className="landing-section white">
        <Footer landing={true} />
      </div> */}
    </div>
  );
};

export default LandingPage;
