import style from "./Details.module.css";
import Breadcrumbs from "./Breadcrumbs";
import Modal from "./Modal";
import { useRef } from "react";

function Details() {
  const modalRef = useRef(null);

  return (
    <div className={style.details}>
      <Breadcrumbs />
      <h1>Mini Spy Scope</h1>
      <div className={style.details__person}>
        <h4>Innovator/s:&nbsp;</h4>
        <p>Jonhalyn C. Go, RCH Mse, Edmark C. Kamintague</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ultrices velit sit amet dignissim vehicula. Donec non porttitor nulla.
        Curabitur eu neque quam. Nunc porta sem ac pellentesque bibendum. Donec
        auctor lacus at orci auctor pharetra. Maecenas ut ligula ante. Maecenas
        tempus, nisl sit amet eleifend convallis, justo lacus volutpat elit, a
        scelerisque sem magna et sem. Proin non massa ante. Nunc fringilla nisl
        id orci aliquam ornare. Mauris blandit pharetra massa, eu varius metus
        varius in. Vivamus eleifend vulputate erat sed tristique. Sed ac nisl a
        sem sodales hendrerit laoreet in urna.
      </p>

      <div className={style.details__quantity}>
        <p>Quantity</p>
        <div className={style.details__quantity_buttons}>
          <button>-</button>
          <p>2</p>
          <button>+</button>
        </div>
      </div>

      <div className={style.details__buttons}>
        <button
          onClick={() => {
            modalRef.current.displayModal();
          }}
        >
          Add to Cart
        </button>
        <a href="#!">Buy Now</a>
      </div>
      <Modal ref={modalRef} />
    </div>
  );
}

export default Details;
