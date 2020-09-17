import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <a href="https://github.com/Oyveloper">
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  );
}
