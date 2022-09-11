import "./Checkbox.scss";

const Checkbox = (props) => {
  return (
    <div className="checkbox-container" data-testid="checkbox-component">
      <label className="labelTest">
        <input
          type="checkbox"
          checked={props.isChecked}
          className={props.isChecked ? "checked" : "?"}
          id="checkbox"
          onChange={props.onChange}
          value={props.isChecked}
          data-testid="checkbox"
        />
        <span data-testid="span-checkbox" className="spanChk">
          I accept the terms and privacy
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
