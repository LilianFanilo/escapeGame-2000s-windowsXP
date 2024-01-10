import React, { useState, useEffect } from "react";
import s from "./OfficeFooter.module.scss";

function OfficeFooter() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  function getFormattedTime() {
    const date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh -= 12;
      session = "PM";
    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    return hh + ":" + mm + " " + session;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <footer className={s.bottomBar}>
        <div className={s.bottomBar_menu}>
          <img src="./images/office/footer_menu_btn.png" alt="" />
        </div>
        <div className={s.bottomBar_menu_right}>
          <img src="./images/office/footer_icon_sound.png" alt="" />
          <img src="./images/office/footer_icon_web.png" alt="" />
          <img src="./images/office/footer_icon_shield.png" alt="" />
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
