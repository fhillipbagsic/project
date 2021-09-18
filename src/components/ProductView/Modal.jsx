import { useState, useImperativeHandle, forwardRef } from "react";
import style from "./Modal.module.css";
const Modal = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    displayModal() {
      setToggle(true);
      setTimeout(() => setToggle(false), 3000);
    },
  }));

  const hideModal = () => {
    setToggle(false);
  };
  return (
    <>
      {toggle && (
        <div className={style.modal} onClick={hideModal}>
          <div className={style.modal__content}>
            <button className={style.modal__content_button} onClick={hideModal}>
              X
            </button>
            <h2 className={style.modal__content_label}>
              Item has been added to your shopping cart
            </h2>
          </div>
        </div>
      )}
    </>
  );
});

export default Modal;
