import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:storeUri" element={<Home />} />
      <Route path="/:storeUri/loja/:categoryUri" element={<ProductList />} />
      <Route path="/:storeUri/busca/:productSearched" element={<ProductList />} />
      <Route path="/:storeUri/produto/:productUri" element={<Product />} />
      <Route path="/:storeUri/carrinho" element={<Cart />} />
    </Switch>
  );
};

export default Routes;
