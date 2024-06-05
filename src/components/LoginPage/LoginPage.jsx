import { useEffect } from "react";
import s from "./LoginPage.module.scss";
import "./LoginPage.scss";
import ButtonSystem from "../ButtonSystem/ButtonSystem";
import sound from "../../assets/sounds/error.wav";

function LoginPage() {
  let pwdError = 0;

  useEffect(() => {
    let accessOffice = document.getElementById("accessOffice");

    const handleKeyPress = (event) => {
      const keyName = event.key;

      if (keyName === "Enter") {
        PwdVerification();
        return;
      }
    };

    const PwdVerification = () => {
      let pwd = document.querySelector("#loginPassword").value;
      document.body.style.cursor = "wait";

      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: "elodie",
          password: pwd,
        }),
      };

      var audio = new Audio(sound);

      // Add loading fetch

      fetch("https://escapegame-back.onrender.com/login", options)
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            let loginPage = document.querySelector(".loginPage");
            loginPage.classList.add("is_hidden");
            console.log("Login successful");
          } else {
            audio.play();
            pwdError += 1;
            console.log(pwdError);
            let pwdErrorDisplay = document.querySelector(".pwdError");
            pwdErrorDisplay.classList.add("is_visible");
            console.log("Login failed: ", json.message);
          }
          if (pwdError >= 3) {
            let pwdHint = document.querySelector(".pwdHint1");
            pwdHint.classList.add("is_visible");
          }
          if (pwdError >= 5) {
            let pwdHint = document.querySelector(".pwdHint2");
            pwdHint.classList.add("is_visible");
          }
          document.body.style.cursor = "default";
        })
        .catch((error) => {
          console.error("Error during login:", error);
          document.body.style.cursor = "default";
        });
    };

    document.addEventListener("keypress", handleKeyPress);
    accessOffice.addEventListener("click", PwdVerification);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
      accessOffice.removeEventListener("click", PwdVerification);
    };
  }, []);

  return (
    <>
      <div className={`${s.loginPageComponent} loginPage`}>
        <div className={s.loginPageMain}>
          <div>
            <img
              src="./images/login_page/login_page_logo.png"
              alt=""
              draggable="false"
            />
            <span>Clicker sur votre compte</span>
          </div>
          <div>
            <ProfileLogin pwdErrorTrigger={pwdError} />
          </div>
        </div>
        <div className={s.loginPageBottom}>
          <div>
            <ButtonSystem
              size="big"
              img="/images/buttons/btn_off_icon.png"
              text="Éteindre le PC"
            />
          </div>
          <div>
            <div className={s.textPageBottom}>
              Après avoir ouvert une session, vous pouvez ajouter ou modifier
              des comptes. <br /> Allez simplement dans le panneau de
              configuration et cliquez sur Comptes d’utilisateur.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProfileLogin(props) {
  return (
    <>
      <div className={s.ProfileLogin}>
        <div className={s.profileBG}>
          <img
            className={s.profileIMG}
            src="/images/login_page/profile_img.png"
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
              <label for="loginPWD">Taper votre mot de passe</label>
              <div className={s.inputContainer}>
                <input
                  readonly
                  onfocus="this.removeAttribute('readonly');"
                  autocomplete="off"
                  type="password"
                  name="loginPWD"
                  id="loginPassword"
                  draggable="false"
                  placeholder="JJMMAAAA"
                />
                <img
                  id="accessOffice"
                  src="./images/buttons/btn_switch_user.png"
                  alt=""
                  width={32}
                  height={32}
                  draggable="false"
                />
                <img
                  src="./images/buttons/btn_support.png"
                  alt=""
                  width={32}
                  height={32}
                  draggable="false"
                />
              </div>
              <div className="pwdContainer">
                <div className="pwdError">Mauvais mot de passe...</div>
                <div className="pwdHint1">Indice : Britney la BEST!</div>
                <div className="pwdHint2">Indice : Regarde le calendrier</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
