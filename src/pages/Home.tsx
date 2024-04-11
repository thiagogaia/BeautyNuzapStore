import MainTransition from "../components/MainTransition"
import Payment from "../components/Payment"
import PopupDiscount from "../components/PopupDiscount"
import WidgetPrivacity from "../components/WidgetPrivacity"
import WidgetWhatsapp from "../components/WidgetWhatsapp"

const Home = () => {
  return (
    <>
      <MainTransition />
      <WidgetWhatsapp numero="5548991729419" />
      <PopupDiscount />
      <WidgetPrivacity />

      <Payment />
    </>
  )
}

export default Home