import style from "./Cart.module.css";
import CartItem from "./CartItem";
function Cart() {
  return (
    <main className="container">
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
    </main>
  );
}

export default Cart;
