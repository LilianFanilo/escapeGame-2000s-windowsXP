import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";

const PopupStyle1 = () => {
  var audio = new Audio("/audios/chocapic.mp3");
  audio.play();

  return (
    <Window>
      <div className={s.PopupStyle1}></div>
    </Window>
  );
};

export default PopupStyle1;
