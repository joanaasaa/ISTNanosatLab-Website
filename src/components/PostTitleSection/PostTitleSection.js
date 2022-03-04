import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "../../style.css";
import "../../layouts/Section/Section.css";
import "./PostTitleSection.css";

const PostTitleBackground = styled.div.attrs((props) => ({
  className: props.className,
}))`
  background-image: url(${(props) => props.backgroundSrc});
`;

function PostTitleSection(props) {
  return (
    <PostTitleBackground
      backgroundSrc={props.backgroundSrc}
      className="image-background post-title-background"
    >
      <div className="post-title-container">
        <h1>{props.title}</h1>
        <Link to="/ #news">
          <button className="istnanosat-button-alternate">
            Back to news feed
          </button>
        </Link>
        <Link to="/news">
          <button className="istnanosat-button-alternate">
            Back to news page
          </button>
        </Link>
      </div>
    </PostTitleBackground>
  );
}

export default PostTitleSection;
