import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

const PopupStyle3 = () => {
  var audio = new Audio("/audios/mcdonalds.mp3");
  audio.play();

  return (
    <Window appName="Nouveau Big mac !" appIcon={audiovisualiser_icon}>
      <div className={s.PopupStyle3}></div>
    </Window>
  );
};

export default PopupStyle3;
