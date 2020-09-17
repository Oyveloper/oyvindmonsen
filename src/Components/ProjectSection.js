import React from "react";
import ProjectView from "./ProjectView";

import "./ProjectSection.css";

import cg from "../images/CG.jpeg";
import skjerdetno from "../images/Skjerdetno.png";

export default function ProjectSection() {
  const projects = [
    {
      name: "skjerdet.no",
      description:
        "Webscraper for student events in Trondheim. Uses Elasticsearch, Flask and React",
      link: "https://skjerdet.no",
      image: skjerdetno,
    },
    {
      name: "skjerdet.no",
      description:
        "Webscraper for student events in Trondheim. Uses Elasticsearch, Flask and React",
      link: "https://skjerdet.no",
      image: skjerdetno,
    },
    {
      name: "skjerdet.no",
      description:
        "Webscraper for student events in Trondheim. Uses Elasticsearch, Flask and React",
      link: "https://skjerdet.no",
      image: skjerdetno,
    },
    {
      name: "skjerdet.no",
      description:
        "Webscraper for student events in Trondheim. Uses Elasticsearch, Flask and React",
      link: "https://skjerdet.no",
      image: skjerdetno,
    },
    {
      name: "Chair Game",
      description:
        "Musical chairs for your phone! An iOS game I made back when learning to program. Published on the AppStore",
      image: cg,
      link:
        "https://apps.apple.com/us/app/chair-game-musical-chairs/id1210198384",
    },
  ];

  const projectElements = projects.map((project) => (
    <ProjectView data={project} />
  ));

  return <div className="ProjectSection">{projectElements}</div>;
}
