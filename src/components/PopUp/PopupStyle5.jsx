import React, { useEffect } from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import popups_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

const PopupStyle5 = ({ onClose }) => {
  useEffect(() => {
    const audio = new Audio("/audios/VivelleDop.mp3");
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <Window
      onClose={onClose}
      appName="VivelleDop Fixation Béton"
      appIcon={popups_icon}
      randomPopUp
      CloseBtnOnly
    >
      <div className={s.PopupStyle5}></div>
    </Window>
  );
};

export default PopupStyle5;
