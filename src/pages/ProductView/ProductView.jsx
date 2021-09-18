import { useParams } from "react-router";
import Carousel from "../../components/ProductView/Carousel";
import Details from "../../components/ProductView/Details";
import style from "./ProductView.module.css";
import Navbar from "../../assets/navbar.png";
import Footer from "../../assets/footer.png";
function ProductView() {
  let { id } = useParams();
  return (
    <>
      <img src={Navbar} alt="" style={{ width: "100%" }} />
      <div className="container">
        <main className={style.product}>
          <Carousel />
          <Details />
        </main>
      </div>
      <img src={Footer} alt="" style={{ width: "100%" }} />
    </>
  );
}

export default ProductView;
