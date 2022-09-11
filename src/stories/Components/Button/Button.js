import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

export const Button = ({ backgroundColor, color, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      id="register"
      className={
        props.disabled ? `${props.className} disabled` : props.className
      }
      disabled={props.disabled}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {props.textButton}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  color: null,
  onClick: undefined,
  className: "",
};
