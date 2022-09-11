import React from "react";
import InputMask from "react-input-mask";
import "./MaskedInput.scss";

const MaskedInput = ({ value, onChange }) => {
  return (
    <div className="phone-container">
      <label htmlFor="phone">Phone</label>
      <InputMask
        mask="(99) 99999-9999"
        value={value}
        id="phone"
        placeholder="(83) 00000-0000"
        onChange={onChange}
      />
    </div>
  );
};

export default MaskedInput;
