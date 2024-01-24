import { useEffect } from "react";
import ButtonOff from "../ButtonOff/ButtonOff";
import s from "./LoginPage.module.scss";

function ProfileLogin() {
  return (
    <>
      <div className={s.ProfileLogin}>
        <div className={s.profileBG}>
          <img className={s.profileIMG} src="" alt="" width={60} height={60} />
          <div className={s.profileInputs}>
            <div>
              <span>Elodie</span>
            </div>
            <div className={s.profileLabelInputs}>
              <label for="loginPWD">Type your password</label>
              <div className={s.inputContainer}>
                <input type="password" name="loginPWD" id="loginPassword" />
                <img src="" alt="" width={"32px"} height={"32px"} />
                <img src="" alt="" width={"32px"} height={"32px"} />
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
            <img src="./images/logos/windowsXP_whiteLogo.png" alt="" />
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
