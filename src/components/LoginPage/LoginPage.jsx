import { useEffect } from "react";
import ButtonOff from "../ButtonOff/ButtonOff";
import s from "./LoginPage.module.scss";

function ProfileLogin() {
  return (
    <>
      <div className={s.ProfileLogin}>
        <img className={s.profileIMG} src="" alt="" width={60} height={60} />
        <span>Elodie</span>
        <input type="password" name="" id="loginPassword" />
        <img src="" alt="" />
      </div>
    </>
  );
}

function LoginPage() {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyName = event.key;

      if (keyName === "Enter") {
        let pwd = document.querySelector("#loginPassword").value;
        const pwdGood = "VJta";
        console.log(pwd);
        if (pwd === pwdGood) {
          console.log("Et vous avez raison !");
          let loginPage = document.querySelector(".loginPage");
          console.log(loginPage);
          loginPage.classList.add("is_hidden");
        } else {
          console.log("Vous me décevez...");
        }
        return;
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className={`${s.loginPageComponent} loginPage`}>
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
