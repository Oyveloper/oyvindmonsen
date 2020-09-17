import React from "react";

export default function Card(props) {
    const color = props.color;
    const id = props.id;

    var cName = "Card Card-" + color;


    return (
        <div className={cName} id={id}>
          {props.children}
        </div>
    );
}
