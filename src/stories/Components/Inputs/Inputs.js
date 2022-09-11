import React from "react";
import "./Inputs.scss";
import { InputStyled } from "../../../styles";
import PropTypes from "prop-types";

export const Inputs = (props) => {
  return (
    <div className="container-input">
      <label
        style={{ color: props.labelColor }}
        className="labelInput"
        htmlFor={props.labelInput}
      >
        {props.labelInput}
      </label>
      <InputStyled
        type={props.inputType}
        className={"input class " + props.inputType}
        placeholder={props.placehInput}
        autoComplete="off"
        onChange={props.handleChange}
        id={"input " + props.inputType}
        style={{ borderColor: props.borderColor, width: props.width }}
      />
    </div>
  );
};

Inputs.propTypes = {
  inputType: PropTypes.oneOf(["text", "date"]),
  placehInput: PropTypes.string,
  labelInput: PropTypes.string,
  borderColor: PropTypes.string,
  labelColor: PropTypes.string,
  width: PropTypes.number,
};

Inputs.defaultProps = {
  inputType: "text",
  placehInput: "Placeholder",
  labelInput: "Label",
  borderColor: null,
  labelColor: null,
  width: 200,
};
