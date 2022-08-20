import React from "react";
import "./Switch.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Switch = (props) => {
  return (
    <>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        type="checkbox"
        id={"react-switch-new"}
        className="react-switch-checkbox"
      />
      <label
        style={{ background: props.isOn && props.onColor }}
        className="react-switch-label"
        htmlFor={"react-switch-new"}
      >
        <span className={"react-switch-button"}>
          {props.isOn ? <FaSun className="h-10 w-10 m-2" style={{color:props.onColor}} />  : <FaMoon className="h-10 w-10 m-2" style={{color:props.onOff}} />}
        </span>
      </label>
    </>
  );
};

export default Switch;
