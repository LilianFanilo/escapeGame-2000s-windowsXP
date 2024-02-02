import s from "./WindowsXP.module.scss";
import OfficeFooter from "./OfficeFooter/OfficeFooter";
import Notepad from "./apps/Notepad/Notepad";
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";

function WindowsXP() {
  return (
    <>
      <div className={s.windowsXP}>
        <OfficeFooter />
      </div>
      <ErrorPopUp />
      <Notepad />
    </>
  );
}

export default WindowsXP;
