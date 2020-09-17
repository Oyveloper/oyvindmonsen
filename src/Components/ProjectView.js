import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectView(props) {
  const title = <h2>{props.data.name}</h2>;
  const description = <p>{props.data.description}</p>;
  /** @type {string} */
  const link = props.data.link;
  const image =
    props.data.image !== undefined ? (
      <img src={props.data.image} alt="Project" />
    ) : null;

  const linkElem =
    link !== undefined && link.includes("github") ? (
      <a href={link} className="ProjectLink">
        <FontAwesomeIcon ion={["fab", "github"]} size="lg" />
      </a>
    ) : (
      <a href={link} className="ProjectLink">
        <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
      </a>
    );

  console.log(props.data.image);
  return (
    <div className="ProjectView">
      {image}
      {linkElem}

      <div className="ProjectTextContainer">
        {title}
        {description}
      </div>
    </div>
  );
}
