import './App.css'
import Slider from './components/Slider'
import Header from './components/Header'
import Footer from './components/Footer'
import WidgetWhatsapp from './components/WidgetWhatsapp'




function App() {
  return (
    <>
      <Header />
      <div className="js-tail-topo-ancora"></div>
      <Slider />
      <Footer />
      <WidgetWhatsapp numero='5548991729419' />
    </>
  )
}

export default App
