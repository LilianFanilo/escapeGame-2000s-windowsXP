import s from "./LoginPage.module.scss";

function LoginPage() {
  return (
    <>
      <div className={s.loginPageComponent}>
        <div className={s.loginPageMain}>
          <div>
            <span>To begin, click your user name</span>
          </div>
          <div>
            <img
              className={s.profileIMG}
              src=""
              alt=""
              width={60}
              height={60}
            />
            <span>Elodie</span>
          </div>
        </div>
        <div className={s.loginPageBottom}>
          <div></div>
          <div>
            After you log on, you can add or change accounts. <br /> Just go to
            Control Panel and click User Accounts.
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
