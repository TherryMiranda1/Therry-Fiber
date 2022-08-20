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
        style={{position:'absolute', zIndex:2, background: props.isOn && props.onColor, margin: '5px'  }}
        className="react-switch-label"
        htmlFor={"react-switch-new"}
      >
        <span className={"react-switch-button"}>
          {props.isOn ? (
            <FaSun className="h-5 w-6 m-1" style={{ color: props.onColor }} />
          ) : (
            <FaMoon className="h-5 w-6 m-1" style={{ color: props.onOff }} />
          )}
        </span>
      </label>
    </>
  );
};

export default Switch;
