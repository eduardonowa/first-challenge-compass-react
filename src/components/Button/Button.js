import React from "react";
import "./Button.scss";

const Button = ({ textButton, ...props }) => {
  return (
    <button
      id="register"
      className={props.classButton}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {textButton}
    </button>
  );
};

export default Button;
