import React, { useEffect, useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import rightpattern from "../../assets/rightback.png";
import leftpattern from "../../assets/leftback.png";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex === dataSlider.length ? 1 : slideIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <div>
        <img className="right-pattern" src={rightpattern} alt="..." />
      </div>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <div className="slider-title">
                <h1 className="obj-title">{obj.title}</h1>
                <p className="subtitle">{obj.subTitle}</p>
              </div>
              <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
      <div>
        <img className="left-pattern" src={leftpattern} alt="..." />
      </div>
    </div>
  );
}
