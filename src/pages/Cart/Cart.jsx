import style from "./Cart.module.css";
import CartItem from "../../components/Cart/CartItem";
import Navbar from "../../assets/navbar.png";
import Footer from "../../assets/footer.png";
import Summary from "../../components/Cart/Summary";
function Cart() {
  return (
    <>
      <img src={Navbar} style={{ width: "100%" }} alt="" />
      <main className={`container ${style.cart}`}>
        <h1 className={style.cart__label}>Shopping Cart</h1>
        <div className={style.cart__labels}>
          <div className={style.cart__labels_product}>
            <input type="checkbox" className={style.cart__labels_checkbox} />
            <h4>Products</h4>
          </div>
          <h4>Unit Price</h4>
          <h4>Quantity</h4>
          <h4>Total Price</h4>
          <h4>Actions</h4>
        </div>
        <CartItem />
        <CartItem />
        <Summary />
      </main>
      <img src={Footer} style={{ width: "100%" }} alt="" />
    </>
  );
}

export default Cart;
