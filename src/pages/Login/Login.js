import "./Login.scss";
import Title from "../../components/Title/Title";
import Inputs from "../../components/Inputs/Inputs";
import Image from "../../components/Image/Image";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import MaskedInput from "../../components/MaskedInput/MaskedInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/success");
    localStorage.setItem("isLogged", true);
  };

  function handleChange(e) {
    const value = e.target.value;
    const id = e.target.id;
    if (id === "name") {
      if (
        /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
          value
        )
      ) {
        setForm({ ...form, [id]: value });
      } else {
        setForm({ ...form, [id]: "" });
      }
    }

    if (id === "email") {
      if (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        setForm({ ...form, [id]: value });
      } else {
        setForm({ ...form, [id]: "" });
      }
    }

    if (id === "password") {
      if (/^[0-9]{6,9}$/.test(value)) {
        setForm({ ...form, [id]: value });
      } else {
        setForm({ ...form, [id]: "" });
      }
    }

    if (id === "phone") {
      const phoneValue = value.replace(/[^0-9]/g, "");
      if (/^[0-9]{11}$/.test(phoneValue)) {
        setForm({ ...form, [id]: phoneValue });
      } else if (!phoneValue) {
        setForm({ ...form, [id]: "empty" });
      } else {
        setForm({ ...form, [id]: "" });
      }
    }

    if (id === "birthday") {
      const date = new Date();
      const year = date.getFullYear();
      const birthYear = value.substring(0, 4);
      const age = year - birthYear;
      if (age >= 18 && age <= 121) {
        setForm({ ...form, [id]: value });
      } else {
        setForm({ ...form, [id]: "" });
      }
    }
  }

  // useEffect(() => {
  //   setTeste(
  //     form.name !== "" &&
  //       form.email !== "" &&
  //       form.password !== "" &&
  //       form.birthday !== ""
  //   );
  // }, [form]);

  useEffect(() => {
    if (
      form.name &&
      form.email &&
      form.password &&
      form.phone &&
      form.birthday &&
      isChecked
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form, isChecked]);

  useEffect(() => {
    for (const property in form) {
      if (form[property]) {
        document.getElementById(property).classList.add("valid");
        document.getElementById(property).classList.remove("notvalid");
      } else {
        document.getElementById(property).classList.remove("valid");
        document.getElementById(property).classList.add("notvalid");
      }
    }
  }, [form]);

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
            handleChange={handleChange}
          />
          <Inputs
            labelFor="email"
            labelInput="Email *"
            inputType="email"
            placehInput="foo@bar.com"
            inputClass="emailInput"
            containerInput="email-container"
            id="email"
            handleChange={handleChange}
          />
          {/* <Inputs
            labelFor="phone"
            labelInput="Phone"
            inputType="phone"
            placehInput="(83) 00000-0000"
            inputClass="phoneInput"
            containerInput="phone-container"
            id="phone"
            handleChange={handleChange}
          /> */}
          <MaskedInput onChange={handleChange} />
          <Inputs
            labelFor="password"
            labelInput="Password *"
            inputType="password"
            placehInput="Enter your password"
            inputClass="pwInput"
            containerInput="pw-container"
            id="password"
            handleChange={handleChange}
          />
          <Inputs
            labelFor="birthday"
            labelInput="Birthday *"
            inputType="date"
            placehInput=""
            inputClass="birthInput"
            containerInput="birthday-container"
            id="birthday"
            handleChange={handleChange}
          />
        </form>
        <footer data-testid="footer">
          <Checkbox
            onChange={() => setIsChecked((prev) => !prev)}
            isChecked={isChecked}
            value={isChecked}
            checked={isChecked}
          />
          <Button
            classButton={
              disabled ? "register-button" : "register-button enabled"
            }
            textButton="Register"
            onClick={handleClick}
            disabled={disabled}
          />
        </footer>
      </div>
    </div>
  );
}

export default Login;
