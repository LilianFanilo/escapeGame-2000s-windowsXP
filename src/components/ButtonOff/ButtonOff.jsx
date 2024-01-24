import s from "./ButtonOff.module.scss";

function ButtonOff() {
  return (
    <>
      <div className={s.btnOffContainer}>
        <img src="./images/buttons/btn_off_icon.png" alt="" draggable="false" />
        <span>Turn Off Computer</span>
      </div>
    </>
  );
}

export default ButtonOff;
