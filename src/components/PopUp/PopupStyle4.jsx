import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

const PopupStyle4 = () => {
  var audio = new Audio("/audios/sncf.mp3");
  audio.play();

  return (
    <Window
      appName="SNCF Voyager avec rapidité et tranquillité"
      appIcon={audiovisualiser_icon}
    >
      <div className={s.PopupStyle4}></div>
    </Window>
  );
};

export default PopupStyle4;
