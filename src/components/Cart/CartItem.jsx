import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import style from "./CartItem.module.css";
import { DeleteModal } from "./Modal";
function CartItem() {
  const deleteModalRef = useRef(null);
  const [hide, setHide] = useState(false);

  const changeHide = () => {
    setHide(!hide);
  };

  useEffect(() => {
    console.log("i am rerendering");
  }, []);

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

            <div className={style.details__quantity}>
              <div className={style.details__quantity_buttons}>
                <button>-</button>
                <p>2</p>
                <button>+</button>
              </div>
            </div>
          </div>
          <div>
            <h4 className={style.item__details_label}>Total Price</h4>{" "}
            <h4>₱ XXX.XX</h4>
          </div>
          <div>
            <h4 className={style.item__details_label}>Actions </h4>
            <button
              className={style.item__details_delete}
              onClick={() => {
                deleteModalRef.current.displayModal();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <DeleteModal ref={deleteModalRef} />
    </>
  );
}

export default CartItem;
