import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from "./routes";
import StoreProvider from "./contexts/Store";
function App() {
  return (
    <>
      <BrowserRouter>
        <StoreProvider>        
          <div className="js-tail-topo-ancora"></div>
          <Routes />
        </StoreProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
