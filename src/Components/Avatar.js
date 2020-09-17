import React from "react";
import oyvatar from "../images/realFace.png";
export default function Avatar(props) {
  const id = props.id;
  return (
    <div className="Avatar" id={id}>
      <img className="avatar-image" alt="" src={oyvatar} />
    </div>
  );
}
