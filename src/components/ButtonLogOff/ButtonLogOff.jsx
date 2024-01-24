import s from "./ButtonLogOff.module.scss";

function ButtonLogOff() {
  return (
    <>
      <div className={s.btnLogOffContainer}>
        <img src="./images/buttons/btn_log_off.png" alt="" draggable="false" />
        <span>Log Off</span>
      </div>
    </>
  );
}

export default ButtonLogOff;
