import s from "./WindowsXP.module.scss";
import OfficeFooter from "./OfficeFooter/OfficeFooter";
import Notepad from "./apps/Notepad/Notepad";
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";
import Blog from "./apps/Blog/Blog";

function WindowsXP() {
  return (
    <>
      <div className={s.windowsXP}>
        <OfficeFooter />
      </div>
      <Notepad />
      <Blog />
    </>
  );
}

export default WindowsXP;
