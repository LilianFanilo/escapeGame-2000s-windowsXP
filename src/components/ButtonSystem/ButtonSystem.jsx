import s from "./ButtonSystem.module.scss";

function ButtonSystem(props) {
  let buttonSize = "";

  if (props.size === "big") {
    buttonSize = s.ButtonSystemBig;
  } else if (props.size === "small") {
    buttonSize = s.ButtonSystemSmall;
  }

  function OpenSystemPopUp() {
    if (props.name == "OFF") {
      let SystemPopUp = document.getElementById("systemPopUp");
      SystemPopUp.style.display = "block";
    }
  }

  return (
    <>
      <div
        className={`${s.ButtonSystem} ${buttonSize}`}
        onClick={OpenSystemPopUp}
      >
        <img src={props.img} alt="" draggable="false" />
        <span>{props.text}</span>
      </div>
    </>
  );
}

export default ButtonSystem;
