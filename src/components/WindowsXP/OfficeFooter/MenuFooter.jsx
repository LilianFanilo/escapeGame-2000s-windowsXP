import ErrorPopUp from "../../ErrorPopUp/ErrorPopUp";
import MenuItem from "../../MenuItem/MenuItem";
import s from "./MenuFooter.module.scss";
import sound from "../../../assets/sounds/error.wav";
import { useRef, useState } from "react";
import ButtonSystem from "../../ButtonSystem/ButtonSystem";

function MenuFooter() {
  const [componentToShow, setComponentToShow] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef(null);

  const playClickSound = () => {
    audioRef.current.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  const handleMenuItemClick = () => {
    playClickSound();
    setIsVisible(true);
    setComponentToShow(<ErrorPopUp onClose={() => setIsVisible(false)} />);
  };

  return (
    <>
      <div className={s.MenuFooter} id="menuFooter">
        <div className={s.footerContainer}>
          <header>
            <img
              src="./images/login_page/profile_img.png"
              alt=""
              width={42}
              height={42}
            />
            <span>Elodie</span>
          </header>
          <section className={s.menu}>
            <hr className={s.orangeHr} />
            <div className={s.menuLeft}>
              <div onClick={handleMenuItemClick}>
                <MenuItem
                  itemImg="/images/menu_items/internet.png"
                  itemName="Internet"
                  itemSubName="Internet Explorer"
                />
              </div>
              <div onClick={handleMenuItemClick}>
                <MenuItem
                  itemImg="/images/menu_items/email.png"
                  itemName="E-mail"
                  itemSubName="Outlook Express"
                  isBold
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
            <div className={s.menuRight}>
              <MenuItem
                itemImg="/images/menu_items/documents.png"
                itemName="My Documents"
                isBold
                smallSize
              />
              <MenuItem
                itemImg="/images/menu_items/recent_documents.png"
                itemName="My Recent Documents"
                isBold
                smallSize
              />
              <MenuItem
                itemImg="/images/menu_items/pictures.png"
                itemName="My Pictures"
                isBold
                smallSize
              />
              <MenuItem
                itemImg="/images/menu_items/music.png"
                itemName="My Music"
                isBold
                smallSize
              />
              <MenuItem
                itemImg="/images/menu_items/computer.png"
                itemName="My Computer"
                isBold
                smallSize
              />
              <div className={s.MenuItem_separator}></div>
              <MenuItem
                itemImg="/images/menu_items/control_panel.png"
                itemName="Control Panel"
                smallSize
              />
              <MenuItem
                itemImg="/images/menu_items/program_access.png"
                itemName="Set Program Access and Defaults"
                smallSize
              />
              <MenuItem
                itemImg="/images/menu_items/network.png"
                itemName="Connect To"
                smallSize
              />
              <MenuItem
                itemImg="/images/menu_items/printers.png"
                itemName="Printers and Taxes"
                smallSize
              />
              <div className={s.MenuItem_separator}></div>
              <MenuItem
                itemImg="/images/menu_items/help.png"
                itemName="Help and Support"
                smallSize
              />
              <MenuItem
                itemImg="/images/menu_items/search.png"
                itemName="Search"
                smallSize
              />
              <MenuItem
                itemImg="/images/menu_items/cmd.png"
                itemName="Run..."
                smallSize
              />
            </div>
          </section>
          <footer>
            <ButtonSystem
              size="small"
              img="/images/buttons/btn_log_off.png"
              text="Déconnexion"
            />
            <ButtonSystem
              size="small"
              img="/images/buttons/btn_off_icon.png"
              text="Éteindre le PC"
              name="OFF"
            />
          </footer>
        </div>
        {isVisible && componentToShow}
      </div>
    </>
  );
}

export default MenuFooter;
