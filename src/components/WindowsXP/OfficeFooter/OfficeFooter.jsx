import React, { useState, useEffect } from "react";
import s from "./OfficeFooter.module.scss";
import MenuFooter from "./MenuFooter";

function OfficeFooter() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [isVisible, setIsVisible] = useState(false);

  function getFormattedTime() {
    const date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    return hh + ":" + mm;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {isVisible && <MenuFooter />}
      <footer className={s.bottomBar}>
        <div
          className={s.bottomBar_menu}
          onClick={() => setIsVisible(!isVisible)}
        >
          <img
            src="./images/office/footer_menu_btn.png"
            alt=""
            draggable="false"
          />
        </div>
        <div className={s.bottomBar_menu_right}>
          <img
            src="./images/office/footer_icon_sound.png"
            alt=""
            draggable="false"
          />
          <img
            src="./images/office/footer_icon_web.png"
            alt=""
            draggable="false"
          />
          <img
            src="./images/office/footer_icon_shield.png"
            alt=""
            draggable="false"
          />
          <div></div>
          <div id="clock" className={s.footer_time}>
            {currentTime}
          </div>
        </div>
      </footer>
    </>
  );
}

export default OfficeFooter;
