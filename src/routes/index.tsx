import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import PasswordSend from "../pages/PasswordSend";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:storeUri" element={<Home />} />
      <Route path="/:storeUri/loja/:categoryUri" element={<ProductList />} />
      <Route path="/:storeUri/busca/:productSearched" element={<ProductList />} />
      <Route path="/:storeUri/produto/:productUri" element={<Product />} />
      <Route path="/:storeUri/carrinho" element={<Cart />} />
      <Route path="/:storeUri/login" element={<Login />} />
      <Route path="/:storeUri/cadastro" element={<Register />} />
      <Route path="/:storeUri/senha" element={<ForgotPassword />} />
      <Route path="/:storeUri/senha-enviada" element={<PasswordSend />} />
    </Switch>
  );
};

export default Routes;
