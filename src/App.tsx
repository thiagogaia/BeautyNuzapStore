import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WidgetWhatsapp from "./components/WidgetWhatsapp";
import PopupDiscount from "./components/PopupDiscount";
import WidgetPrivacity from "./components/WidgetPrivacity";
import MainTransition from "./components/MainTransition";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      {/* <Header />
      <div className="js-tail-topo-ancora"></div>
      <MainTransition />
      <Footer />

      <WidgetWhatsapp numero="5548991729419" />
      <PopupDiscount />
      <WidgetPrivacity /> */}

      <Payment />
    </>
  );
}

export default App;
