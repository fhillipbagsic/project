import style from "./Checkout.module.css";
import Navbar from "../../assets/navbar.png";
import Footer from "../../assets/footer.png";
import gcash from "../../assets/gcash.png";
import banktransfer from "../../assets/banktransfer.jpg";
import paypal from "../../assets/paypal.png";
import CartItem from "../../components/Checkout/CartItem";
import { EditModal, OrderModal } from "../../components/Checkout/Modal";
import { useRef } from "react";

function Checkout() {
  const orderModalRef = useRef(null);
  const editModalRef = useRef(null);
  return (
    <>
      <img src={Navbar} style={{ width: "100%" }} alt="" />
      <div className="container">
        <h2 className={style.checkout__title}>Check Out</h2>
      </div>

      <div className={style.checkout__details}>
        <div className={`container ${style.checkout__address}`}>
          <p>mapicon</p>
          <div>
            <h4>Delivery Address</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              at aliquam consequatur dignissimos? Tenetur, quae nulla?{" "}
            </p>
          </div>
          <p
            className={style.checkout__address_edit}
            onClick={() => editModalRef.current.displayModal()}
          >
            Edit{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className={style.cart__labels}>
          <div className={style.cart__labels_product}>
            <h4>Products Ordered</h4>
          </div>
          <h4>Unit Price</h4>
          <h4>Quantity</h4>
          <h4>Total Price</h4>
        </div>
        <CartItem />
        <CartItem />

        <div className={style.checkout__payment}>
          <div className={style.checkout__payment_type}>
            <h3>Payment type</h3>
            <img src={gcash} alt="" />
            <img src={banktransfer} alt="" />
            <img src={paypal} alt="" />
          </div>

          <div className={style.checkout__payment_upload}>
            <h3>Upload Payment</h3>
            <p>Upload your Proof of Payment:</p>
            <label htmlFor="fileUpload">Choose file:</label>
            <input type="file" id="fileUpload" />
          </div>
        </div>
        <div className={style.checkout__total}>
          <h3>Total Payment:</h3>
          <h3 className={style.checkout__total_price}>P XXX.XX</h3>
        </div>
        <div className={style.checkout__button}>
          <button onClick={() => orderModalRef.current.displayModal()}>
            Place Order
          </button>
        </div>
      </div>

      <img src={Footer} style={{ width: "100%" }} alt="" />
      <OrderModal ref={orderModalRef} />
      <EditModal ref={editModalRef} />
    </>
  );
}

export default Checkout;
