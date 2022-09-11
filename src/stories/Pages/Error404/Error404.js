import React from "react";
import "./Error404.scss";
import PropTypes from "prop-types";

export const Error404 = (props) => {
  return (
    <div className="error-container">
      <h1 id="erro404" data-testid="error-404-title">
        {props.text}
      </h1>
    </div>
  );
};

Error404.propTypes = {
  text: PropTypes.string,
};

Error404.defaultProps = {
  text: "Error404",
};
