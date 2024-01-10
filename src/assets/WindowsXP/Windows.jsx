import s from "./Office.module.scss";
import OfficeFooter from "./OfficeFooter/OfficeFooter";

function WindowsXP() {
  return (
    <>
      <div className={s.officeComponent}>
        <OfficeFooter />
      </div>
    </>
  );
}

export default WindowsXP;
