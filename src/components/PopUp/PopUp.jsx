import React, { useState, useEffect } from "react";
import PopupStyle1 from "./PopupStyle1";
import PopupStyle2 from "./PopupStyle2";
import PopupStyle3 from "./PopupStyle3";
import PopupStyle4 from "./PopupStyle4";
import PopupStyle5 from "./PopupStyle5";
import s from "./PopUp.module.scss";

const PopupContainer = () => {
  const [popups, setPopups] = useState([]);

  useEffect(() => {
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateRandomPopup = () => {
      const popupStyles = [
        PopupStyle1,
        PopupStyle2,
        PopupStyle3,
        PopupStyle4,
        PopupStyle5,
      ];
      const randomStyleIndex = getRandomInt(0, popupStyles.length - 1);
      const PopupComponent = popupStyles[randomStyleIndex];
      const id = new Date().getTime() + Math.random(); // Générer un ID unique
      return { id, component: PopupComponent };
    };

    const interval = setInterval(
      () => {
        const newPopup = generateRandomPopup();
        setPopups((prevPopups) => [...prevPopups, newPopup]);
      },
      getRandomInt(7000, 10000),
    );

    return () => clearInterval(interval);
  }, []);

  const handleClosePopup = (id) => {
    setPopups((prevPopups) => prevPopups.filter((popup) => popup.id !== id));
  };

  return (
    <div className={s.PopupContainer}>
      {popups.map((popup) => {
        const PopupComponent = popup.component;
        return (
          <PopupComponent
            key={popup.id}
            onClose={() => handleClosePopup(popup.id)}
          />
        );
      })}
    </div>
  );
};

export default PopupContainer;
