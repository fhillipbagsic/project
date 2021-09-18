import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { lazy, Suspense } from "react";
//components
const Products = lazy(() => import("./pages/Products"));
const ProductView = lazy(() => import("./pages/ProductView/ProductView"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products/innovations" />
          </Route>
          <Route path="/products/:category" component={Products} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
