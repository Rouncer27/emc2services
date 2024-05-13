import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderComponet.scss";

const SliderComponent = ({ data }) => {
  console.log("SliderComponent: ", data);
  const [slideDisplay, setSlideDisplay] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let sliderRef1 = useRef(null);

  useEffect(() => {
    sliderRef1.slickGoTo(slideDisplay);
  }, [slideDisplay]);

  const handleOnClick = (index) => {
    setSlideDisplay(index);
  };

  return (
    <div className="services-slider">
      <div className="services-slider-wrapper">
        <div className="services-slider-title">
          <h2>{data.title}</h2>
        </div>
        <div className="services-slider-navigation">
          {data.sliderSlides.map((slide, index) => {
            return (
              <button
                className={`${slideDisplay === index ? "active" : ""}`}
                onClick={() => {
                  handleOnClick(index);
                }}
                key={index}
              >
                {slide.tabTitle}
              </button>
            );
          })}
        </div>
        <Slider
          className="services-slider-slides"
          {...settings}
          ref={(slider) => (sliderRef1 = slider)}
        >
          {data.sliderSlides.map((slide, index) => {
            return (
              <div className="services-slider-slides-slide" key={index}>
                <div className="services-slider-slides-slide-image">
                  <div className="services-slider-slides-slide-image-container">
                    <img
                      src={slide.slideImage.sourceUrl}
                      alt={slide.slideImage.altText}
                    />
                  </div>
                </div>
                <div className="services-slider-slides-slide-content">
                  <div className="services-slider-slides-slide-content-wrap">
                    <div>
                      <h3>{slide.slideTitle}</h3>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: slide.slideContent }}
                    />
                  </div>
                  <div className="services-slider-slides-slide-content-overlay" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
