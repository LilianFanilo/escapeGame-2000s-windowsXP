import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";

const PopupStyle4 = () => {
  var audio = new Audio("/audios/sncf.mp3");
  audio.play();

  return (
    <Window>
      <div className={s.PopupStyle4}></div>
    </Window>
  );
};

export default PopupStyle4;
