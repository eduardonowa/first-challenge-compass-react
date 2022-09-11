import React, { useState, useEffect, useRef } from "react";
import "./Error401.scss";
import PropTypes from "prop-types";

export const Error401 = (props) => {
  const [count, setCount] = useState(6);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    return () => clear();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (count === 0) {
      clear();
    }
    // eslint-disable-next-line
  }, [count]);

  return (
    <div className="error-container">
      <div id="erro401">
        <h1 data-testid="error-401-title">{props.text}</h1>
        <p data-testid="error-401-text">You will be redirect in {count} s...</p>
      </div>
    </div>
  );
};

Error401.propTypes = {
  text: PropTypes.string,
};

Error401.defaultProps = {
  text: "Error401",
};
