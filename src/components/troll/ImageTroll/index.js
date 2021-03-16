import React from "react";
import "./styles.css";
import { Carousel } from "antd";

const contentStyle = {
  width: "100px",
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const ImgPlay = () => {
  return (
    <>
      <h1>dsafd</h1>
      <Carousel>
        <div>
          <span style={contentStyle}>1</span>
        </div>
        <div>
          <span style={contentStyle}>2</span>
        </div>
        <div>
          <span style={contentStyle}>3</span>
        </div>
        <div>
          <span style={contentStyle}>4</span>
        </div>
      </Carousel>
    </>
  );
};
export default ImgPlay;
