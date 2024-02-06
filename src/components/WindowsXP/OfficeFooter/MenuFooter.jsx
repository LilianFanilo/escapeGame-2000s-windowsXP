import ButtonLogOff from "../../ButtonLogOff/ButtonLogOff";
import ButtonOff from "../../ButtonOff/ButtonOff";
import ErrorPopUp from "../../ErrorPopUp/ErrorPopUp";
import MenuItem from "../../MenuItem/MenuItem";
import s from "./MenuFooter.module.scss";
import sound from "../../../assets/sounds/error.wav";
import { useRef, useState } from "react";

function MenuFooter() {
  const [componentToShow, setComponentToShow] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef(null);

  const playClickSound = () => {
    audioRef.current.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  const handleMenuItemClick = (itemName) => {
    playClickSound();
    setIsVisible(true);

    // Logique pour définir le composant à afficher en fonction de l'itemName
    if (itemName === "Internet") {
      setComponentToShow(
        <ErrorPopUp className={s.center} onClose={() => setIsVisible(false)} />,
      );
    } else {
      // Gérez d'autres cas ici
    }
  };

  return (
    <>
      <div className={s.MenuFooter}>
        <div className={s.footerContainer}>
          <header>
            <img src="" alt="" width={42} height={42} />
            <span>Elodie</span>
          </header>
          <section className={s.menu}>
            <hr className={s.orangeHr} />
            <div className={s.menuLeft}>
              <MenuItem
                itemImg="/images/menu_items/internet.png"
                itemName="Internet"
                itemSubName="Internet Explorer"
              />
              <div onClick={() => handleMenuItemClick("Internet")}>
                <MenuItem
                  itemImg="/images/menu_items/email.png"
                  itemName="E-mail"
                  itemSubName="Outlook Express"
                />
              </div>
              <div className={s.MenuItem_separator}></div>
              <MenuItem
                itemImg="/images/menu_items/minesweeper.png"
                itemName="Minesweeper"
              />
              <MenuItem
                itemImg="/images/menu_items/notepad.png"
                itemName="Notepad"
              />
              <MenuItem
                itemImg="/images/menu_items/winamp.png"
                itemName="Winamp"
              />
              <MenuItem
                itemImg="/images/menu_items/paint.png"
                itemName="Paint"
              />
              <MenuItem
                itemImg="/images/menu_items/media_player.png"
                itemName="Windows Media Player"
              />
              <MenuItem
                itemImg="/images/menu_items/messenger.png"
                itemName="Windows Messenger"
              />
            </div>
            <audio ref={audioRef} src={sound} />
            <div className={s.menuRight}></div>
          </section>
          <footer>
            <ButtonLogOff />
            <ButtonOff />
          </footer>
        </div>
        {isVisible && componentToShow}
      </div>
    </>
  );
}

export default MenuFooter;
