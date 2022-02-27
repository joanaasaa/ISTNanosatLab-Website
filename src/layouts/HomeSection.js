import React from "react";

import "../style.css";
import "./HomeSection.css";

class HomeSection extends React.Component {
  constructor(props) {
    super(props);

    this.classes = "home-section-container";
    if (props.additionalClasses) {
      this.classes = " " + props.classes;
    }
  }

  render() {
    return (
      <div id={this.props.id} className={this.classes}>
        <h3>{this.props.subtitle}</h3>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

export default HomeSection;
