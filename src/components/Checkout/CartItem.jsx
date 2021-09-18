import { useState } from "react";
import style from "./CartItem.module.css";

function CartItem() {
  const [hide, setHide] = useState(false);

  const changeHide = () => {
    setHide(!hide);
  };

  window.addEventListener("resize", function (event) {
    if (event.target.innerWidth > 1000) {
      setHide(false);
    } else if (event.target.innerWidth <= 1000) {
      setHide(true);
    }
  });

  return (
    <>
      <div className={style.item}>
        <div className={style.item__details}>
          <div className={style.item__details_image}>
            <img src="https://i.stack.imgur.com/y9DpT.jpg" alt="" />
          </div>
          <div>
            <h3>Mini Spy Scope</h3>
            <p>Lorem ipsum</p>
          </div>
          <div className={style.item___dropdown_button}>
            <button onClick={changeHide}>Expand</button>
          </div>
        </div>

        <div
          className={`${style.item__subdetails} ${
            hide ? style.item__dropdown : ""
          }`}
        >
          <div>
            <h4 className={style.item__details_label}>Unit Price</h4>{" "}
            <h4>₱ XXX.XX</h4>
          </div>

          <div>
            <h4 className={style.item__details_label}>Quantity</h4>

            <div className={style.details__quantity}>2</div>
          </div>
          <div>
            <h4 className={style.item__details_label}>Total Price</h4>{" "}
            <h4>₱ XXX.XX</h4>
          </div>
        </div>
      </div>
      <p>
        Receive by <span className={style.item__delivery}>5</span> working days
      </p>
    </>
  );
}

export default CartItem;
