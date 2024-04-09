import './App.css'
import Slider from './components/Slider'
import Header from './components/Header'
import Footer from './components/Footer'
import WidgetWhatsapp from './components/WidgetWhatsapp'
import PopupDiscount from './components/PopupDiscount'
import WidgetPrivacity from './components/WidgetPrivacity'




function App() {
  return (
    <>
      <Header />
      <div className="js-tail-topo-ancora"></div>
      <Slider />
      <Footer />
      <WidgetWhatsapp numero='5548991729419' />
      <PopupDiscount />
      <WidgetPrivacity />
    </>
  )
}

export default App
