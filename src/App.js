import React from "react";
import Header from "./Components/Header.js";
import "./App.scss";

import IntroSection from "./Components/IntroSection";
import ProjectSection from "./Components/ProjectSection";

// Images

export default function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <h1 style={{ textAlign: "center" }}>Some Projects</h1>
      <ProjectSection />
    </div>
  );
}
