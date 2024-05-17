import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";

const PopupStyle5 = () => {
  var audio = new Audio("/audios/VivelleDop.mp3");
  audio.play();

  return (
    <Window>
      <div className={s.PopupStyle5}></div>
    </Window>
  );
};

export default PopupStyle5;
