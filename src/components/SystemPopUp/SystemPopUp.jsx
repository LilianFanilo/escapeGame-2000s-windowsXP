import s from "./SystemPopUp.module.scss";

function SystemPopUp() {
  return (
    <>
      <div className={s.SystemPopUp}>
        <div className={s.modal}>
          <header>
            <span>Log Off Windows</span>
            <img src="/images/system_popup/windows_icon.png" alt="" />
          </header>
          <div className={s.content}></div>
          <footer>
            <button>Cancel</button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default SystemPopUp;
