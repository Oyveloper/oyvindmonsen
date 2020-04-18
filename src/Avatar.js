import React from "react";
import oyvatar from "./oyvatar.png";
export default function Avatar(props) {
    const id = props.id;
    return (
        <div id="Avatar" id={id}>
          <img className="avatar-image" alt="" src={oyvatar}/>
        </div>
    );
}
