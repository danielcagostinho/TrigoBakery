import React from "react";

import "./Footer.scss";

const Footer = ({landing}) => {
  return (
    <div className="footer">
      <div className="footer-content">
       { !landing ? <h1>Check out Trigo on...</h1> : null}
        <div className="footer-links">
          <h2>
            <span>-</span>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/trigobakeryinc/"
            >
              Instagram
            </a>
          </h2>
          <h2>
            <span>-</span>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:someone@yoursite.com"
            >
              Email
            </a>
          </h2>
          <h2>
            <span>-</span>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Trigo-Bakery-2001114193522615"
            >
              Facebook
            </a>
          </h2>
          <h2>
            <span>-</span>{" "}
            <a target="_blank" rel="noreferrer" href="tel:905-896-7245">
              Call Trigo
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
