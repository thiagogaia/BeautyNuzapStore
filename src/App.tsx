import "./App.css";

import Routes from "./routes";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

async function computeHash() {
  const fpPromise = FingerprintJS.load({ monitoring: false });
  const fp = await fpPromise;
  const result = await fp.get();
  window.localStorage.setItem("userFingerPrint", result.visitorId);
  return result;
}

function App() {
  computeHash();

  return (
    <>
      <div className="js-tail-topo-ancora"></div>
      <Routes />
    </>
  );
}

export default App;
