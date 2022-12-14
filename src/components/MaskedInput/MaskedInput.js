import React from "react";
import InputMask from "react-input-mask";
import "./MaskedInput.scss";

const MaskedInput = ({ value, onChange }) => {
  return (
    <div className="phone-container" data-testid="maskedInput-component">
      <label data-testid="label-maskedInput" htmlFor="phone">
        Phone
      </label>
      <InputMask
        mask="(99) 99999-9999"
        value={value}
        id="phone"
        placeholder="(83) 00000-0000"
        onChange={onChange}
        data-testid="inputMask-component"
      />
    </div>
  );
};

export default MaskedInput;
