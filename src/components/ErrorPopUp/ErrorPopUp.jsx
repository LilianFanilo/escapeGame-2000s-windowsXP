import s from "./ErrorPopUp.module.scss"
import error from "/images/buttons/error.png";
import error_main from "/images/buttons/error_main.png";

export default function ErrorPopUp() {
  return (
    <>
      <div className={s.window}>
        <div className={s.header_bg}></div>
        <div className={s.window_header}>
        <img
          draggable="false"
          src={error}
          className={s.window_header_icon}
          alt=""
        />
          <div className={s.window_header_title}>C:\</div>
          <div className={s.window_close}>
            <button className={s.window_button}>
            </button>
          </div>
        </div>
        <div className={s.window_content}>
          <div className={s.window_main}>
            <div className={s.error_top}>
              <img
                draggable="false"
                src={error_main}
                className={s.error_image}
                alt=""
              />
              <div className={s.error_messages}>
                <p className={s.error_message}>C:\</p>
                <p className={s.error_message}>Application not found</p>
              </div>
            </div>
            <div className={s.error_bottom}>
              <div className={s.error_button}>
                <span className={s.error_confirm}>OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}