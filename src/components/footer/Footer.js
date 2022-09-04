import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-right">
          <h5>Lorem</h5>
          <h5>Ipsum</h5>
          <h5>Dolor</h5>
        </div>
        <div className="footer-left">
          <p>
            <p className="footer-ferm">Fermentum Venenatis</p> Parturient
            Venenatis Etiam Frilingilla / Nullam
          </p>
        </div>
      </div>
      <div className="copy-email">
        <p>© 2022 Parturient Lorem</p>
        <p>lorem@example.com.tr</p>
      </div>
    </div>
  );
};

export default Footer;
