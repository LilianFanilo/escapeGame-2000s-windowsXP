import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

const PopupStyle5 = () => {
  var audio = new Audio("/audios/VivelleDop.mp3");
  audio.play();

  return (
    <Window appName="VivelleDop Fixation Béton" appIcon={audiovisualiser_icon}>
      <div className={s.PopupStyle5}></div>
    </Window>
  );
};

export default PopupStyle5;
