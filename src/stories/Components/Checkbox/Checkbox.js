import React, { useState } from "react";
import "./Checkbox.scss";
import PropTypes from "prop-types";

export const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="checkbox-container">
      <label className="labelTest">
        <input
          type="checkbox"
          checked={isChecked}
          className={isChecked ? "checked" : "?"}
          id="checkbox"
          onChange={() => setIsChecked((prev) => !prev)}
          value={isChecked}
        />
        <span style={{ color: props.spanColor }} className="spanChk">
          {props.spanText}
        </span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  spanText: PropTypes.string,
  spanColor: PropTypes.string,
};

Checkbox.defaultProps = {
  spanText: "I accept the terms and privacy",
  spanColor: null,
};
