import React from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

const PopupStyle1 = () => {
  var audio = new Audio("/audios/chocapic.mp3");
  audio.play();

  return (
    <Window
      appName="Chocapic c'est fort en chocolat!"
      appIcon={audiovisualiser_icon}
    >
      <div className={s.PopupStyle1}></div>
    </Window>
  );
};

export default PopupStyle1;
