import React from "react";

import "../../style.css";
import "../Section/Section.css";
import PostTitleSection from "../../components/PostTitleSection/PostTitleSection";

export default function Post(props) {
  var classes = "post-container";
  if (props.classes) {
    classes = props.classes + " " + classes;
  }

  return (
    <>
      <PostTitleSection
        title={props.title}
        backgroundSrc={props.backgroundSrc}
      />
      <div className={classes}>
        <div className="post">{props.children}</div>
      </div>
    </>
  );
}
