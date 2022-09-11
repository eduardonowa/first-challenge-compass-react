import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Button/Button";
import PropTypes from "prop-types";

import "./Success.scss";

export const Success = (props) => {
  return (
    <div
      className="card-success"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="success-container">
        <Image />
        <Title text={props.text} />
        <Button
          classButton="button-goback"
          textButton="Go Back!"
          disabled={false}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

Success.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

Success.defaultProps = {
  text: "Success!",
  backgroundColor: null,
  onClick: undefined,
};
