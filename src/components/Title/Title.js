import React from "react";

const Title = (props) => {
  return (
    <h1 data-testid="title-component" className={props.classTitle}>
      {props.text}
    </h1>
  );
};

export default Title;
