import s from "./Window.module.scss";
import { useEffect, useRef, useState } from "react";
import error from "/images/buttons/error.png";
import error_main from "/images/buttons/error_main.png";

export default function Window({
  onClose,
  children,
  appName,
  appIcon,
  CloseBtnOnly,
  randomPopUp,
}) {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // Valeur 500 500 afin de ne pas voir la window se déplacer
  const [windowPosition, setWindowPosition] = useState({ x: 500, y: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isFirstLoop, setIsFirstLoop] = useState(true);
  const [isFocused, setIsFocused] = useState(true);
  const windowRef = useRef(null);

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
      if (randomPopUp) {
        setWindowPosition({
          x: windowEl.offsetWidth * -(getRandomInt(0, 5) / 10),
          y: windowEl.offsetHeight * -(getRandomInt(0, 5) / 10),
        });
      } else {
        setWindowPosition({
          x: windowEl.offsetWidth * -0.5,
          y: windowEl.offsetHeight * -0.5,
        });
      }

      setIsFirstLoop(false);
    }

    const handleClickOutside = (e) => {
      if (windowRef.current && !windowRef.current.contains(e.target)) {
        setIsFocused(false);
      } else {
        setIsFocused(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDragging, initialPosition, windowPosition, isFirstLoop, onClose]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialPosition({ x: e.clientX, y: e.clientY });
    setIsFocused(true);
  };

  const handleHeaderClick = (e) => {
    // Empêcher la propagation de l'événement pour éviter le déclenchement du handleMouseDown
    e.stopPropagation();
  };

  // const handleConfirmClick = () => {
  //   onClose();
  // };

  return (
    <>
      <div
        id="windowComponent"
        ref={windowRef}
        className={s.window}
        style={{
          transform: `translate(${windowPosition.x}px, ${windowPosition.y}px)`,
          backgroundColor: isFocused ? "rgb(8, 49, 217)" : "rgb(101, 130, 245)",
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          className={s.header_bg}
          style={{
            background: isFocused
              ? "linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%)"
              : "linear-gradient(rgb(118, 151, 231) 0%, rgb(126, 158, 227) 3%, rgb(148, 175, 232) 6%, rgb(151, 180, 233) 8%, rgb(130, 165, 228) 14%, rgb(124, 159, 226) 17%, rgb(121, 150, 222) 25%, rgb(123, 153, 225) 56%, rgb(130, 169, 233) 81%, rgb(128, 165, 231) 89%, rgb(123, 150, 225) 94%, rgb(122, 147, 223) 97%, rgb(171, 186, 227) 100%)",
          }}
        ></div>
        <header className={s.window_header} onClick={handleHeaderClick}>
          <img
            draggable="false"
            src={appIcon}
            className={s.window_header_icon}
            alt={`${appName} icon`}
          />
          <div className={s.window_header_title}>{appName}</div>
          <div className={s.window_close}>
            {!CloseBtnOnly && (
              <>
                <button
                  className={s.window_minimize}
                  onClick={onClose}
                ></button>
                <button
                  className={s.window_maximize}
                  onClick={onClose}
                ></button>
              </>
            )}
            <button className={s.window_button} onClick={onClose}></button>
          </div>
        </header>
        <div
          className={s.window_content}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}
