import React, { useEffect } from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

const PopupStyle2 = ({ onClose }) => {
  useEffect(() => {
    const audio = new Audio("/audios/avast.mp3");
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <Window
      onClose={onClose}
      appName="Mise à jour Avast"
      appIcon={audiovisualiser_icon}
    >
      <div className={s.PopupStyle2}></div>
    </Window>
  );
};

export default PopupStyle2;
