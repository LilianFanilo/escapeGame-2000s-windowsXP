import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

const PopupStyle2 = () => {
  var audio = new Audio("/audios/avast.mp3");
  audio.play();

  return (
    <Window appName="Mise à jour Avast" appIcon={audiovisualiser_icon}>
      <div className={s.PopupStyle2}></div>
    </Window>
  );
};

export default PopupStyle2;
