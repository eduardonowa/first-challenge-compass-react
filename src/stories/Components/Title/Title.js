import React from "react";
import PropTypes from "prop-types";
import './Title.scss'

export const Title = (props) => {
  return (
    <h1 style={{ color: props.color }} className="title-story">
      {props.text}
    </h1>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Title.defaultProps = {
  text: "Intern Sign Up",
  color: null,
};
