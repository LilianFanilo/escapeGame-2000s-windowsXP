import notepad from "../../../../assets/WindowsIcons/notepad.png";
import s from "./Notepad.module.scss";

export default function Notepad() {
  return (
    <>
      <div className={s.notepad}>
        <img
          draggable="false"
          height={30}
          width={30}
          src={notepad}
          className={s.image}
          alt=""
        />
        <p className={s.title}>Notepad</p>
      </div>
    </>
  );
}
