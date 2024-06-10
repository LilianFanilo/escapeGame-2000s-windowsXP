import s from "./MenuItem.module.scss";

function MenuItem(props) {
  return (
    <>
      <div
        className={`${s.MenuItem} ${props.smallSize ? s.MenuItem_Small : ""}`}
        onClick={props.onClick}
      >
        <img src={props.itemImg} alt={props.imgAlt} draggable="false" />
        <div
          className={`${s.MenuItem_texts} ${
            props.isBold ? s.MenuItem_Bold : ""
          }`}
        >
          <div>{props.itemName}</div>
          {props.itemSubName && (
            <div className={s.MenuItem_subText}>{props.itemSubName}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default MenuItem;
