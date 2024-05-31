import React, { useState } from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";
import { Howl, Howler } from "howler";

const PopupStyle1 = ({ onClose }) => {
  // let audio = new Audio("/audios/chocapic.mp3");
  // audio.play();

  return (
    <Window
      onClose={onClose}
      appName="Chocapic c'est fort en chocolat!"
      appIcon={audiovisualiser_icon}
    >
      <div className={s.PopupStyle1}></div>
    </Window>
  );
};

export default PopupStyle1;
