import React from "react";

export default function FancyHeader(props) {
    const text = props.text;

    return(
        <div className="FancyHeader">
          <svg></svg>
          <h2>{text}</h2>
        </div>
    );
}
