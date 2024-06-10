import { createPortal } from "react-dom";
import s from "./ButtonSystem.module.scss";
import { useState } from "react";
import SystemPopUp from "../SystemPopUp/SystemPopUp";

function ButtonSystem(props) {
  let buttonSize = "";

  if (props.size === "big") {
    buttonSize = s.ButtonSystemBig;
  } else if (props.size === "small") {
    buttonSize = s.ButtonSystemSmall;
  }

  return (
    <>
      <div
        className={`${s.ButtonSystem} ${buttonSize}`}
        onClick={props.onClick}
      >
        <img src={props.img} alt="" draggable="false" />
        <span>{props.text}</span>
      </div>
    </>
  );
}

export default ButtonSystem;
