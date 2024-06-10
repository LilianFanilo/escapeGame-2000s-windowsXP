import { useEffect, useState } from "react";
import s from "./ErrorPopUp.module.scss";
import error from "/images/buttons/error.png";
import error_main from "/images/buttons/error_main.png";
import Window from "../Window/Window";

export default function ErrorPopUp({
  onClose,
  errorContent,
  errorTextBtn,
  errorAudio,
}) {
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const audio = new Audio(errorAudio);
    audio.play();

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

      audio.pause();
      audio.currentTime = 0;
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
      <Window
        onClose={onClose}
        appIcon={error_main}
        appName={"C:\\"}
        CloseBtnOnly
      >
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
                <p className={s.error_message}>
                  {errorContent ? errorContent : "Application not found"}
                </p>
              </div>
            </div>
            <div className={s.error_bottom}>
              <div className={s.error_button} onClick={handleConfirmClick}>
                <span className={s.error_confirm}>
                  {errorTextBtn ? errorTextBtn : "OK"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </>
  );
}
