import React from "react";
import "./Slider.css";
import nexticon from "../../assets/nexticon.png";
import previcon from "../../assets/previcon.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        className="slider-icon"
        src={direction === "next" ? nexticon : previcon}
      />
    </button>
  );
}
