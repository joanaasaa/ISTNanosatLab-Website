import React from "react";

import "./style.scss";

export function ISTSat1Button(props) {
  const buttonTypeOptions = {
    default: "istsat-button",
    alternate: "istsat-button-alternate",
    facebook: "istsat-button-facebook",
    instagram: "istsat-button-instagram",
    twitter: "istsat-button-twitter",
  };

  var buttonType;
  if (!props.buttonType) {
    buttonType = buttonTypeOptions.default;
  } else {
    if (!(props.buttonType in buttonTypeOptions))
      buttonType = buttonTypeOptions.default;
    else buttonType = buttonTypeOptions[props.buttonType];
  }

  const targetOptions = ["_self", "_blank", "_parent", "_top"];
  var target;
  if (!props.target) {
    target = targetOptions[0];
  } else {
    if (!targetOptions.includes(props.target)) target = buttonTypeOptions[0];
    else target = props.target;
  }

  return (
    <a href={props.url} target={target} rel="noreferrer">
      <button className={buttonType}>{props.text}</button>
    </a>
  );
}
