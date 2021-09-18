import { Helmet } from "react-helmet";
import { Redirect, Route, Switch, useParams } from "react-router";
import Filter from "../components/Products/Filter";
import Gallery from "../components/Products/Gallery";
import Heading from "../components/Products/Heading";

function Products() {
  let { category } = useParams();

  return (
    <Switch>
      <Route path="/products/innovations">
        <Helmet>
          <title>Innovations | </title>
        </Helmet>
        <Heading category={category} />
        <Filter category={category} />
        <Gallery />
      </Route>
      <Route path="/products/books">
        <Helmet>
          <title>Books | </title>
        </Helmet>
        <Heading category={category} />
        <Filter category={category} />
        <Gallery />
      </Route>
      <Route path="/products/souvenirs">
        <Helmet>
          <title>Souvenirs | </title>
        </Helmet>
        <Heading category={category} />
        <Filter category={category} />
        <Gallery />
      </Route>
      <Route path="/products/">
        <Redirect to="/products/innovations" />
      </Route>
    </Switch>
  );
}

export default Products;
