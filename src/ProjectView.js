import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectView(props) {
    const title = <h3>{props.title}</h3>;
    const description = <p>{props.description}</p>;
    const image = <img src={props.image}/>;
    const link = props.link;
    const githubLink = props.github
          ? <li><a href="{props.github}"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></a></li>
          : null;

    return (
        <div className="ProjectView">
          <h3>{title}</h3>
          {description}
          {githubLink}
          {image}
        </div>
    );
}
