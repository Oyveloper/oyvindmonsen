import React from "react";

export default function FancyHeader(props) {
  const text = props.text;

  const line = (<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <line x1="-90" y1="5" x2="90" y2="5" stroke="rgb(255, 255, 255)" strokeWidth="10"/>
                </svg>);
  return(
    <div className="FancyHeader">
      {line}
      <h2>{text}</h2>
      {line}
    </div>
  );
}
