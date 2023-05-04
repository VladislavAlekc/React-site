import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import coverSlider from "../../assets/img/logo/intro/cover/01.png";
import coverSlider2 from "../../assets/img/logo/intro/cover/02.png";
import { Link } from "react-router-dom";
import React from "react";

export const Slider: React.FC = () => {
  return (
    <div className="intro__body">
      <div className="intro__slider slider-intro">
        <Swiper
          allowTouchMove={false}
          spaceBetween={250}
          slidesPerView={"auto"}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          watchOverflow={true}
          observer={true}
          observeParents={true}
          speed={1500}
          pagination={{ el: ".slider-intro__dotts", clickable: true }}
          modules={[Pagination, Autoplay]}
          className="slider-intro__slide"
        >
          <SwiperSlide className="slider-intro__img _ibg">
            <img src={coverSlider} alt="slider" />
          </SwiperSlide>
          <SwiperSlide className="slider-intro__img _ibg">
            <img src={coverSlider2} alt="slider2" />
          </SwiperSlide>
        </Swiper>

        <div className="slider-intro__dotts slider-dotts"></div>
      </div>

      <div className="intro__content content-intro">
        <h1 className="content-intro__text">
          <span className="content-intro__bolt">THE BRAND</span>
          <br />
          OF LUXERIOUS
          <span className="content-intro__decor"> FASHION</span>
        </h1>
        <div className="mini-catalog__button ">
          <Link
            to="/catalog"
            className="mini-catalog__more btn _rose-btn _icon-arrow-right"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
