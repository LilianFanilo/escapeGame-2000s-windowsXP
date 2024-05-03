import Window from "../../../Window/Window";
import s from "./Notepad.module.scss";

export default function Notepad() {
  return (
    <>
      <Window>
        <div className={s.appContainer}>
          <section className={s.toolbar}>
            <div className={s.toolbarList}>
              <div>File</div>
              <div>Edit</div>
              <div>Format</div>
              <div>View</div>
              <div>Help</div>
            </div>
          </section>
          <textarea spellCheck="false" className={s.textZone}>
            Désolé il n'y a rien, au moins tu auras essayé XD
          </textarea>
        </div>
      </Window>
    </>
  );
}
