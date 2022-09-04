import React from "react";
import Slider from "../slider/Slider";
import "./Main.css";
import imgcons from "../../assets/main1-2.png";
import imgsus from "../../assets/main2-1.png";
import imgef from "../../assets/main3.png";
import imgfri from "../../assets/main4.png";
import imglast from "../../assets/last.png";

const Main = () => {
  return (
    <div>
      <Slider />
      <div className="main">
        <h1 className="main-title">What's on your mind?</h1>
        <p className="title-info">
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
          congue.
        </p>
        <div className="cards">
          <div className="cards-container">
            <img className="consc-img" src={imgcons} alt="..." />
            <h5>Consectetur Adipiscing</h5>
            <p className="consc-p">
              In a laoreet purus. Integer turpis quam, laoreet id orci nec.
            </p>
          </div>
          <div className="cards-container">
            <img className="consc-img" src={imgsus} alt="..." />
            <h5>Suspendisse Bibendum</h5>
            <p>
              Ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla
              in purus eget.
            </p>
          </div>
          <div className="cards-container">
            <img className="consc-img" src={imgef} alt="..." />
            <h5>Efficitur Scelerisque</h5>
            <p>Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.</p>
          </div>
          <div className="cards-container">
            <img className="consc-img" src={imgfri} alt="..." />
            <h5>Fringilla Mauris</h5>
            <p>
              Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam
              a quam.
            </p>
          </div>
        </div>
      </div>
      <div className="info-container">
        <img className="last-image" src={imglast} alt="..." />
        <div className="text-area">
          <p>
            Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus.
            Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat
            commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate
            lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit.
          </p>
          <ul>
            <li>
              Consequat voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Duis aute irure dolor in reprehenderit.
            </li>
            <li>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </li>
            <li>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </li>
          </ul>
          <button className="btn">Lorem ipsum</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
