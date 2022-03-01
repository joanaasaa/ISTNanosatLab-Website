import React from "react";

import "../style.css";
import "./HomeSection.css";

function HomeSection(props) {
  var classes = "home-section-container";
  if (props.classes) {
    classes = " " + props.classes;
  }

  return (
    <div id={props.id} className={classes}>
      <h3>{props.subtitle}</h3>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default HomeSection;
