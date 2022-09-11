import "./Login.scss";
import Title from "../../../components/Title/Title";
import Inputs from "../../../components/Inputs/Inputs";
import Image from "../../../components/Image/Image";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";
import MaskedInput from "../../../components/MaskedInput/MaskedInput";
import PropTypes from "prop-types";
import { useState } from "react";

export const Login = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="card-login">
      <div className="login">
        <Image />
        <Title classTitle="title" text="Intern Sign Up" />
        <form className="form" data-testid="form">
          <Inputs
            labelFor="name"
            labelInput="Full Name *"
            inputType="name"
            placehInput="Name"
            inputClass="nameInput"
            containerInput="name-container"
            id="name"
          />
          <Inputs
            labelFor="email"
            labelInput="Email *"
            inputType="email"
            placehInput="foo@bar.com"
            inputClass="emailInput"
            containerInput="email-container"
            id="email"
          />
          <MaskedInput />
          <Inputs
            labelFor="password"
            labelInput="Password *"
            inputType="password"
            placehInput="Enter your password"
            inputClass="pwInput"
            containerInput="pw-container"
            id="password"
          />
          <Inputs
            labelFor="birthday"
            labelInput="Birthday *"
            inputType="date"
            placehInput=""
            inputClass="birthInput"
            containerInput="birthday-container"
            id="birthday"
          />
        </form>
        <footer>
          <Checkbox
            onChange={() => setIsChecked((prev) => !prev)}
            isChecked={isChecked}
            value={isChecked}
            checked={isChecked}
          />
          <Button
            classButton={
              props.disabled ? "register-button" : "register-button enabled"
            }
            textButton="Register"
            onClick={props.onClick}
            disabled={props.disabled}
          />
        </footer>
      </div>
    </div>
  );
};

Login.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Login.defaultProps = {
  disabled: true,
  onClick: undefined,
};
