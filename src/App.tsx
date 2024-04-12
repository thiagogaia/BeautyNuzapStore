import "./App.css";

import { useContext } from "react";
import Loading from "./components/Loading";
import Routes from "./routes";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { ProductsContext } from "./contexts/Products";

async function computeHash() {
  const fpPromise = FingerprintJS.load({ monitoring: false });
  const fp = await fpPromise;
  const result = await fp.get();
  window.localStorage.setItem("userFingerPrint", result.visitorId);
  return result;
}

function App() {
  computeHash();

  const { loading } = useContext(ProductsContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="js-tail-topo-ancora"></div>
          <Routes />
        </>
      )}
    </>
  );
}

export default App;
