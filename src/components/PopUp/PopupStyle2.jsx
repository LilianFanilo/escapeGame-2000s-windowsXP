import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";

const PopupStyle2 = () => {
  var audio = new Audio("/audios/avast.mp3");
  audio.play();

  return (
    <Window>
      <div className={s.PopupStyle2}>Test2</div>
    </Window>
  );
};

export default PopupStyle2;
