import s from "./Window.module.scss";
import { useEffect, useState } from "react";
import error from "/images/buttons/error.png";
import error_main from "/images/buttons/error_main.png";

export default function Window({ onClose, children }) {
  // Valeur 500 500 afin de ne pas voir la window se déplacer
  const [windowPosition, setWindowPosition] = useState({ x: 500, y: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [isFirstLoop, setIsFirstLoop] = useState(true);

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

    let windowEl = document.getElementById("windowComponent");

    // La fenêtre s'aligne au milieu lors de la première boucle du UseEffect
    if (isFirstLoop) {
      setWindowPosition({
        x: windowEl.offsetWidth * -0.5,
        y: windowEl.offsetHeight * -0.5,
      });

      setIsFirstLoop(false);
    }

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
        id="windowComponent"
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
        <div className={s.window_content}>{children}</div>
      </div>
    </>
  );
}
