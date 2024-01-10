import ButtonOff from "../ButtonOff/ButtonOff";
import ProfileLogin from "../ProfileLogin/ProfileLogin";
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
            <ProfileLogin />
          </div>
        </div>
        <div className={s.loginPageBottom}>
          <div>
            <ButtonOff />
          </div>
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
