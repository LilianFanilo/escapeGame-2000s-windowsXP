import ButtonLogOff from "../../ButtonLogOff/ButtonLogOff";
import ButtonOff from "../../ButtonOff/ButtonOff";
import MenuItem from "../../MenuItem/MenuItem";
import s from "./MenuFooter.module.scss";

function MenuFooter() {
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
              <MenuItem
                itemImg="/images/menu_items/email.png"
                itemName="E-mail"
                itemSubName="Outlook Express"
              />
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
            <div className={s.menuRight}></div>
          </section>
          <footer>
            <ButtonLogOff />
            <ButtonOff />
          </footer>
        </div>
      </div>
    </>
  );
}

export default MenuFooter;
