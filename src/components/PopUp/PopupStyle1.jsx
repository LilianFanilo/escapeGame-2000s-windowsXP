import React, { useEffect } from "react";
import Window from "../Window/Window";
import s from "./PopUp.module.scss";
import popups_icon from "../../assets/WindowsIcons/popups_icon.svg";

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
    <Window
      onClose={onClose}
      appName="Chocapic c'est fort en chocolat!"
      appIcon={popups_icon}
      randomPopUp
      CloseBtnOnly
    >
      <div className={s.PopupStyle1}></div>
    </Window>
  );
};

export default PopupStyle1;
