import s from "./AppToolBar.module.scss";

function AppToolBar() {
  return (
    <>
      <section className={s.ATB_toolbar}>
        <div className={s.ATB_options}>
          <div>
            <div className={s.ATB_dropDown}>
              <div className={s.ATB_dropDown_label}>File</div>
            </div>
            <div className={s.ATB_dropDown}>
              <div className={s.ATB_dropDown_label}>Edit</div>
            </div>
            <div className={s.ATB_dropDown}>
              <div className={s.ATB_dropDown_label}>View</div>
            </div>
            <div className={s.ATB_dropDown}>
              <div className={s.ATB_dropDown_label}>Favorites</div>
            </div>
            <div className={s.ATB_dropDown}>
              <div className={s.ATB_dropDown_label}>Tools</div>
            </div>
            <div className={s.ATB_dropDown}>
              <div className={s.ATB_dropDown_label}>Help</div>
            </div>
          </div>
        </div>
        <img src="/images/appToolBar/windows_icon.png" alt="" />
      </section>
      <section className={s.ATB_function_bar}></section>
      <section className={s.ATB_address_bar}></section>
    </>
  );
}

export default AppToolBar;
