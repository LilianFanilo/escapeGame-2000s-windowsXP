import ButtonLogOff from "../../ButtonLogOff/ButtonLogOff";
import ButtonOff from "../../ButtonOff/ButtonOff";
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
            <div className={s.menuLeft}></div>
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
