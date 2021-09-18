import style from "./Summary.module.css";
function Summary() {
  return (
    <div className={`container ${style.summary}`}>
      <p>
        Total (6): <span className={style.summary__total}>₱ XXX.XX</span>
      </p>
      <button className={style.summary__button}>Checkout</button>
    </div>
  );
}

export default Summary;
