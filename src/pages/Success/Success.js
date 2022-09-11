import React, { useEffect } from "react";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./Success.scss";

const Success = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("isLogged", "");
    navigate("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("isLogged")) {
      navigate("/error-401");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card-success">
      <div className="success-container">
        <Image />
        <Title text="Success!" />
        <Button
          classButton="button-goback"
          textButton="Go Back!"
          disabled={false}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Success;
