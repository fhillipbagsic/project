import { useParams } from "react-router";
import Carousel from "../../components/ProductView/Carousel";
import Details from "../../components/ProductView/Details";
import style from "./ProductView.module.css";
function ProductView() {
  let { id } = useParams();
  return (
    <div className="container">
      <main className={style.product}>
        <Carousel />
        <Details />
      </main>
    </div>
  );
}

export default ProductView;
