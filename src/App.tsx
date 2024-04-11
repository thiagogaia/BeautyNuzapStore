import "./App.css";

import { useState } from "react";
import Loading from "./components/Loading";
import Routes from "./routes";
import FingerprintJS from '@fingerprintjs/fingerprintjs'

async function computeHash() {
  const fpPromise = FingerprintJS.load({ monitoring: false })
  const fp = await fpPromise
  const result = await fp.get()
  window.localStorage.setItem('userFingerPrint', result.visitorId);
  return result
}

function App() {
  computeHash()
  const [load, setLoad] = useState(true);
  const promise = new Promise((resolve) => setTimeout(() => resolve(true), 1000));
  promise.then(() => setLoad(false));

  return (
    <>
      {load ? (
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
