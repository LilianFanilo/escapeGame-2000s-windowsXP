import React, { useEffect } from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

const PopupStyle4 = ({ onClose }) => {
  useEffect(() => {
    const audio = new Audio("/audios/sncf.mp3");
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <Window
      onClose={onClose}
      appName="SNCF Voyager avec rapidité et tranquillité"
      appIcon={audiovisualiser_icon}
      randomPopUp
      CloseBtnOnly
    >
      <div className={s.PopupStyle4}></div>
    </Window>
  );
};

export default PopupStyle4;
