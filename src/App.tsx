import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from "./routes";
import StoreProvider from "./contexts/Store";
import CartProvider from "./contexts/cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <StoreProvider>
          <CartProvider>
            <div className="js-tail-topo-ancora"></div>
            <Routes />
          </CartProvider>
        </StoreProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
