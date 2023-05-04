import React from "react";
import { Slider } from "../components/Swiper";

const Home: React.FC = () => {
  return (
    <main className="page">
      <section className="page__intro intro">
        <div className="intro__container _container">
          <Slider />
        </div>
      </section>
      <section className="page__info info">
        <div className="info__container _container">
          <div className="info__column block-column">
            <div className="block-column__icon _icon-delivery"></div>
            <h4 className="block-column__support">Free Delivery</h4>
            <p className="block-column__text">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
          <div className="info__column block-column">
            <div className="block-column__icon _icon-sale"></div>
            <h4 className="block-column__support">Sales & discounts</h4>
            <p className="block-column__text">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
          <div className="info__column block-column">
            <div className="block-column__icon _icon-crown"></div>
            <h4 className="block-column__support">Quality assurance</h4>
            <p className="block-column__text">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
