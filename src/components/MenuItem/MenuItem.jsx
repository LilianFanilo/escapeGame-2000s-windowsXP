import s from "./MenuItem.module.scss";

function MenuItem(props) {
  return (
    <>
      <div className={s.MenuItem}>
        <img src={props.itemImg} alt={props.imgAlt} draggable="false" />
        <div className={s.MenuItem_texts}>
          <div>{props.itemName}</div>
          <div className={s.MenuItem_subText}>{props.itemSubName}</div>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
