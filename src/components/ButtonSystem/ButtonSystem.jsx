import { createPortal } from "react-dom";
import s from "./ButtonSystem.module.scss";
import { useState } from "react";
import SystemPopUp from "../SystemPopUp/SystemPopUp";

function ButtonSystem(props) {
  const [inputVisible, setInputVisible] = useState(false);
  let buttonSize = "";

  if (props.size === "big") {
    buttonSize = s.ButtonSystemBig;
  } else if (props.size === "small") {
    buttonSize = s.ButtonSystemSmall;
  }

  const testButton = () => {
    if (props.name === "OFF") {
      console.log("test");
    }
    setInputVisible(!inputVisible);
  };

  return (
    <>
      <div className={`${s.ButtonSystem} ${buttonSize}`} onClick={testButton}>
        <img src={props.img} alt="" draggable="false" />
        <span>{props.text}</span>
      </div>
      {/* {props.name == "OFF" &&
        inputVisible &&
        createPortal(<SystemPopUp />, document.getElementById("root"))} */}
    </>
  );
}

export default ButtonSystem;
