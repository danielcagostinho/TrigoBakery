import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h1>Check out Trigo on...</h1>
        <div className="footer-links">
          <p>
            <span>-</span>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/trigobakeryinc/"
            >
              Instagram Page
            </a>
          </p>
          <p>
            <span>-</span>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:someone@yoursite.com"
            >
              Email Trigo
            </a>
          </p>
          <p>
            <span>-</span>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Trigo-Bakery-2001114193522615"
            >
              Facebook Page
            </a>
          </p>
          <p>
            <span>-</span>{" "}
            <a target="_blank" rel="noreferrer" href="tel:905-896-7245">
              Call Trigo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
