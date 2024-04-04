import s from "./SystemPopUp.module.scss";

function SystemPopUp(inputVisible) {
  return (
    <>
      <div className={s.SystemPopUp} id="systemPopUp">
        <div className={s.modal}>
          <header>
            <span>Log Off Windows</span>
            <img src="/images/system_popup/windows_icon.png" alt="" />
          </header>
          <div className={s.content}></div>
          <footer>
            <button onClick={() => setInputVisible(!inputVisible)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default SystemPopUp;
