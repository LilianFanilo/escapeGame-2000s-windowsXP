import React, { useEffect } from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import audiovisualiser_icon from "../../assets/WindowsIcons/audiovisualiser_icon.png";

const PopupStyle1 = ({ onClose }) => {
  useEffect(() => {
    const audio = new Audio("/audios/chocapic.mp3");
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className={s.Popup}>
      <Window
        onClose={onClose}
        appName="Chocapic c'est fort en chocolat!"
        appIcon={audiovisualiser_icon}
      >
        <div className={s.PopupStyle1}></div>
      </Window>
    </div>
  );
};

export default PopupStyle1;
