import React, { useState, useEffect } from "react";

// Import des différents composants de popup
import PopupStyle1 from "./PopupStyle1";
import PopupStyle2 from "./PopupStyle2";
import PopupStyle3 from "./PopupStyle3";
import PopupStyle4 from "./PopupStyle4";
import PopupStyle5 from "./PopupStyle5";

const PopupContainer = () => {
  const [popups, setPopups] = useState([]);

  useEffect(() => {
    // Fonction pour générer un nombre aléatoire entre min et max
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Fonction pour générer une popup aléatoire
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
      return <PopupComponent />;
    };

    // Générer une popup aléatoire toutes les 5 à 10 secondes
    const interval = setInterval(
      () => {
        const newPopup = generateRandomPopup();
        setPopups((prevPopups) => [...prevPopups, newPopup]);
      },
      getRandomInt(5000, 10000),
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {popups.map((popup, index) => (
        <div key={index}>{popup}</div>
      ))}
    </div>
  );
};

export default PopupContainer;
