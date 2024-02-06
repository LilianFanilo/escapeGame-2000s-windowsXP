import s from "./ButtonSystem.module.scss";

function ButtonSystem(props) {
  let buttonSize = ""; // Initialisez la classe à une chaîne vide par défaut

  if (props.size === "big") {
    console.log("One component is big");
    buttonSize = s.ButtonSystemBig; // Utilisez la classe CSS module correspondante pour "big"
  } else if (props.size === "small") {
    console.log("One component is small");
    buttonSize = s.ButtonSystemSmall; // Utilisez la classe CSS module correspondante pour "small"
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
