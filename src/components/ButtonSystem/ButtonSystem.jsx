import s from "./ButtonSystem.module.scss";

function ButtonSystem(props) {
  let buttonSize = "";

  if (props.size === "big") {
    buttonSize = s.ButtonSystemBig;
  } else if (props.size === "small") {
    buttonSize = s.ButtonSystemSmall;
  }

  return (
    <>
      <div className={`${s.ButtonSystem} ${buttonSize}`}>
        <img src={props.img} alt="" draggable="false" />
        <span>{props.text}</span>
      </div>
    </>
  );
}

export default ButtonSystem;
