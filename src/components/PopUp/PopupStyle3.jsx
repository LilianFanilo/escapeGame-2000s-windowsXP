import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";

const PopupStyle3 = () => {
  var audio = new Audio("/audios/mcdonalds.mp3");
  audio.play();

  return (
    <Window>
      <div className={s.PopupStyle3}></div>
    </Window>
  );
};

export default PopupStyle3;
