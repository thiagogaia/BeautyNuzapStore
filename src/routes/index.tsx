import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import PasswordSent from "../pages/PasswordSent";
import Dashboard from "../pages/Dashboard";
import PurchaseRequests from "../pages/PurchaseRequests";
import MyData from "../pages/MyData";
import ChangePassword from "../pages/ChangePassword";
import Address from "../pages/Address";
import Credits from "../pages/Credits";
import DiscountVoucher from "../pages/DiscountVoucher";
import Wishlist from "../pages/Wishlist";

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
      <Route path="/:storeUri/senha-enviada" element={<PasswordSent />} />
      <Route path="/:storeUri/conta" element={<Dashboard />} />
      <Route path="/:storeUri/conta/pedidos" element={<PurchaseRequests />} />
      <Route path="/:storeUri/conta/cadastro" element={<MyData />} />
      <Route path="/:storeUri/conta/senha" element={<ChangePassword />} />
      <Route path="/:storeUri/conta/enderecos" element={<Address />} />
      <Route path="/:storeUri/conta/carteira" element={<Credits />} />
      <Route path="/:storeUri/conta/descontos" element={<DiscountVoucher />} />
      <Route path="/:storeUri/conta/desejos" element={<Wishlist />} />
    </Switch>
  );
};

export default Routes;
