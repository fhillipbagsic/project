import style from "./Item.module.css";

function Item({ id, image, name, person }) {
  return (
    <div className={style.item}>
      <img src={image} alt="" className={style.item__image} />
      <h3 className={style.item__name}>{name}</h3>
      <p className={style.item__person}>{person}</p>

      <a className={style.item__button} href={`/product/${id}`}>
        View item
      </a>
    </div>
  );
}

export default Item;
