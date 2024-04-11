import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Loading from "./components/Loading";
import Routes from "./routes";

function App() {
  const [load, setLoad] = useState(true);
  const promise = new Promise((resolve) => setTimeout(() => resolve(true), 1000));
  promise.then(() => setLoad(false));

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="js-tail-topo-ancora"></div>
          <Routes />
          <Footer />          
        </>
      )}
    </>
  );
}

export default App;
