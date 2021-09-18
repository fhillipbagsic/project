import { useState } from "react";
import style from "./CartItem.module.css";
function CartItem() {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.item}>
      <div className={style.item__details}>
        <div className={style.item__details_image}>
          <img src="https://i.stack.imgur.com/y9DpT.jpg" alt="" />
        </div>
        <div>
          <h3>Mini Spy Scope</h3>
          <p>Lorem ipsum</p>
        </div>
      </div>

      <div className={style.item__subdetails}>
        <div>
          <h4 className={style.item__details_label}>Unit Price</h4>{" "}
          <h4>₱ XXX.XX</h4>
        </div>

        <div>
          <h4 className={style.item__details_label}>Quantity</h4>-2+
        </div>
        <div>
          <h4 className={style.item__details_label}>Total Price</h4>{" "}
          <h4>₱ XXX.XX</h4>
        </div>
        <div>
          <h4 className={style.item__details_label}>Actions </h4>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
