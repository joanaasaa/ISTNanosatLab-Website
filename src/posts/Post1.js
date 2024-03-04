import React from "react";

import "style.scss";
import "layouts/Post/Post";
import Post from "layouts/Post/Post.js";

import background from "resources/images/coding.jpg";

export default function Post1() {
  return (
    <>
      <Post title="Software scholarship available" backgroundSrc={background}>
        <p>Some very important text!</p>
      </Post>
    </>
  );
}
