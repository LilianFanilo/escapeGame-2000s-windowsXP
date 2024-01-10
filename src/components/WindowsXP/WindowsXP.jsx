import s from "./WindowsXP.module.scss";
import OfficeFooter from "./OfficeFooter/OfficeFooter";
import Notepad from "./apps/Notepad/Notepad";

function WindowsXP() {
  return (
    <>
      <div className={s.windowsXP}>
        <OfficeFooter />
      </div>
      <Notepad />
    </>
  );
}

export default WindowsXP;
