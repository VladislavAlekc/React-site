import React from "react";
import faceFooter from "../assets/img/main/subscription/face/01.png";
import coverBackground from "../assets/img/main/subscription/background/01.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__subscription subscription">
        <div className="subscription__container">
          <div className="subscription__content">
            <div className="subscription__column column-face">
              <div className="column-face__face">
                <img src={faceFooter} alt="face" />
              </div>
              <div className="column-face__text">
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condimentum“
              </div>
            </div>
            <div className="subscription__column column-text">
              <div className="column-text__subscribe">
                <span>SUBSCRIBE</span>
                FOR OUR NEWLETTER AND PROMOTION
              </div>
              <form className="column-text__register">
                <input
                  className="column-text__register-text"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button className="column-text__register-button" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="subscription__cover _ibg">
          <img src={coverBackground} alt="cover" />
        </div>
      </div>
      <div className="footer__social social">
        <div className="social__container _container">
          <div className="social__body">
            <div className="social__text">
              © 2021 Brand All Rights Reserved.
            </div>
            <div className="social__icons icon">
              <div className="icon__background">
                <a href="#" className="icon__item _icon-facebook"></a>
              </div>
              <div className="icon__background">
                <a href="#" className="icon__item _icon-inst"></a>
              </div>
              <div className="icon__background">
                <a href="#" className="icon__item _icon-pi"></a>
              </div>
              <div className="icon__background">
                <a href="#" className="icon__item _icon-twit"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
