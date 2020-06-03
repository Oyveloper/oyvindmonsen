import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectView(props) {
  const title = <h3>{props.title}</h3>;
  const description = <p>{props.description}</p>;
  const link = props.link;
  const image = <a href={link}><img src={props.image}/></a>;
  const githubLink = props.github
        ? <li key={0}><a href="{props.github}"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></a></li>
        : null;
  const language = props.language
        ? <li key={1}>Written in: {props.language}</li>
        : null;
  const otherFacts = props.facts
        ? props.facts.map((f) => <li key={2 + props.facts.indexOf(f)}>{f}</li>)
        : null; 

  return (
    <div className="ProjectView">
      <div className="project-text">
        {title}
        {description}
        {githubLink}
        <div className="project-key-facts">
          <h4>About</h4>
          <ul>
            {language}
            {githubLink}
            {otherFacts}
          </ul>
        </div>
      </div>
      <div className="project-image">
        {image}
      </div>
          
    </div>
  );
}
