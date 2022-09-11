import React, { useState, useEffect, useRef } from "react";
import "./Error401.scss";
import { useNavigate } from "react-router-dom";

const Error401 = () => {
  const [count, setCount] = useState(6);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  const navigate = useNavigate();

  useEffect(() => {
    id.current = window.setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    return () => clear();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/");
      clear();
    }
    // eslint-disable-next-line
  }, [count]);

  return (
    <div className="error-container">
      <div id="erro401">
        <h1 data-testid="error-401-title">Error 401</h1>
        <p data-testid="error-401-text">You will be redirect in {count} s...</p>
      </div>
    </div>
  );
};

export default Error401;
