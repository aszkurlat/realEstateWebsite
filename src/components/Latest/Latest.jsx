import "./Latest.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/properties-data.json";
import { sliderSettings } from "../../utils/common.js";

function Latest() {
  return (
    <div className="l-wrapper">
      <div className="paddings innerWidth l-container">
        <div className="flexColStart l-head">
          <span className="orangeText">See Now</span>
          <span className="primaryText">Latest Properties Added</span>
        </div>

        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart l-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText l-price">
                  <span style={{ color: "orange" }}>€ </span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Latest;
const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter l-buttons">
      <button onClick={() => swiper.slidePrev()} className="l-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="l-nextButton">
        &gt;
      </button>
    </div>
  );
};
