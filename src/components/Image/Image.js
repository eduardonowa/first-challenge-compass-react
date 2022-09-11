import React from "react";
import Imagem from "../../images/data.png";
import "./Image.scss";

const Image = () => {
  return (
    <div className="img-container" data-testid="image-component">
      <img data-testid="img-logo" src={Imagem} alt="logo" />
    </div>
  );
};

export default Image;
