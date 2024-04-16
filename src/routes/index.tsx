import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:storeUri" element={<Home />} />
      <Route path="/:storeUri/loja/:category" element={<ProductList />} />
      <Route path="/:storeUri/produto/:productUri" element={<Product />} />
    </Switch>
  );
};

export default Routes;
