import React from "react";
import "./Inputs.scss";
import { InputStyled } from "../../styles";

const Inputs = (props) => {
  return (
    <div className={props.containerInput} data-testid="inputs-components">
      <label
        className="labelInput"
        htmlFor={props.labelFor}
        data-testid="label-inputs"
      >
        {props.labelInput}
      </label>
      <InputStyled
        type={props.inputType}
        className={props.inputClass}
        placeholder={props.placehInput}
        autoComplete="off"
        onChange={props.handleChange}
        id={props.id}
        data-testid="inputs-types"
      />
    </div>
  );
};

export default Inputs;
