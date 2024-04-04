import { useEffect, useState } from "react";
import s from "./ErrorPopUp.module.scss";
import error from "/images/buttons/error.png";
import error_main from "/images/buttons/error_main.png";

export default function ErrorPopUp({ onClose }) {
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - initialPosition.x;
        const deltaY = e.clientY - initialPosition.y;
        setWindowPosition({
          x: windowPosition.x + deltaX,
          y: windowPosition.y + deltaY,
        });
        setInitialPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, initialPosition, windowPosition]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialPosition({ x: e.clientX, y: e.clientY });
  };

  const handleHeaderClick = (e) => {
    // Empêcher la propagation de l'événement pour éviter le déclenchement du handleMouseDown
    e.stopPropagation();
  };

  const handleConfirmClick = () => {
    onClose();
  };

  return (
    <>
      <div
        className={s.window}
        style={{
          transform: `translate(${windowPosition.x}px, ${windowPosition.y}px)`,
        }}
        onMouseDown={handleMouseDown}
      >
        <div className={s.header_bg}></div>
        <header className={s.window_header} onClick={handleHeaderClick}>
          <img
            draggable="false"
            src={error}
            className={s.window_header_icon}
            alt=""
          />
          <div className={s.window_header_title}>C:\</div>
          <div className={s.window_close}>
            <button
              className={s.window_button}
              onClick={handleConfirmClick}
            ></button>
          </div>
        </header>
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
    </>
  );
}
