import { useState } from "react";
import s from "./ErrorPopUp.module.scss"
import error from "/images/buttons/error.png";
import error_main from "/images/buttons/error_main.png";

export default function ErrorPopUp({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleConfirmClick = () => {
    // Logique à exécuter lors du clic sur le bouton OK
    // ...

    // Fermer le composant en mettant isVisible à false
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className={s.window}>
          <div className={s.header_bg}></div>
          <div className={s.window_header}>
          <img
            draggable="false"
            src={error}
            className={s.window_header_icon}
            alt=""
          />
            <div className={s.window_header_title}>C:\</div>
            <div className={s.window_close}>
              <button className={s.window_button} onClick={handleConfirmClick}>
              </button>
            </div>
          </div>
          <div className={s.window_content}>
            <div className={s.window_main}>
              <div className={s.error_top}>
                <img
                  draggable="false"
                  src={error_main}
                  className={s.error_image}
                  alt=""
                />
                <div className={s.error_messages}>
                  <p className={s.error_message}>C:\</p>
                  <p className={s.error_message}>Application not found</p>
                </div>
              </div>
              <div className={s.error_bottom}>
                <div className={s.error_button} onClick={handleConfirmClick}>
                  <span className={s.error_confirm}>OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}