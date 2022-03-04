import React from "react";

import "../../style.css";
import "./Section.css";

function Section(props) {
  var classes = "section-container";
  if (props.classes) {
    classes = props.classes + " " + classes;
  }

  return (
    <div id={props.id} className={classes}>
      <div className="section">
        <h3>{props.subtitle}</h3>
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}

export default Section;
