import { useEffect } from "react";
import s from "./LoginPage.module.scss";
import "./LoginPage.scss";
import ButtonSystem from "../ButtonSystem/ButtonSystem";

function ProfileLogin() {
  return (
    <>
      <div className={s.ProfileLogin}>
        <div className={s.profileBG}>
          <img
            className={s.profileIMG}
            src=""
            alt=""
            width={60}
            height={60}
            draggable="false"
          />
          <div className={s.profileInputs}>
            <div>
              <span>Elodie</span>
            </div>
            <div className={s.profileLabelInputs}>
              <label for="loginPWD">Type your password</label>
              <div className={s.inputContainer}>
                <input
                  readonly
                  onfocus="this.removeAttribute('readonly');"
                  autocomplete="off"
                  type="password"
                  name="loginPWD"
                  id="loginPassword"
                  draggable="false"
                />
                <img
                  src="./images/buttons/btn_switch_user.png"
                  alt=""
                  width={32}
                  height={32}
                  draggable="false"
                />
                <img src="" alt="" width={32} height={32} draggable="false" />
              </div>
            </div>
          </div>
        </div>
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
        const pwdGood = "1234";
        console.log(pwd);
        if (pwd === pwdGood) {
          console.log("Bon mot de passe !");
          let loginPage = document.querySelector(".loginPage");
          console.log(loginPage);
          loginPage.classList.add("is_hidden");
        } else {
          console.log("Mauvais mot de passe...");
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
            <img
              src="./images/logos/windowsXP_whiteLogo.png"
              alt=""
              draggable="false"
            />
            <span>To begin, click your user name</span>
          </div>
          <div>
            <ProfileLogin />
          </div>
        </div>
        <div className={s.loginPageBottom}>
          <div>
            <ButtonSystem
              size="big"
              img="/images/buttons/btn_off_icon.png"
              text="Turn off the computer"
            />
          </div>
          <div>
            <div className={s.textPageBottom}>
              After you log on, you can add or change accounts. <br /> Just go
              to Control Panel and click User Accounts.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
