import React from "react";

import mainBlob from "../Blobs/MainBlob.svg";
import Avatar from "./Avatar";

import "./IntroSection.css";

export default function IntroSection() {
  const mainStyle = {
    display: "flex",
  };

  return (
    <div className="IntroSection" style={mainStyle}>
      <div id="infoBlob">
        <img alt="colorful blob" src={mainBlob}></img>
        <div id="infoBlobText">
          <h2>Øyvind Monsen</h2>
          <p>
            I'm a computer science student at NTNU in Trondheim. I work mainly
            with web development, both frontend and backend. Technologies I've
            used includes React, Spring, Flask, Apache, Docker and iOS.
          </p>
        </div>
        <Avatar id="floatingAvatar" />
      </div>
    </div>
  );
}
