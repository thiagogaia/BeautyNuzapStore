import './style.css'
const WidgetPrivacity = () => {
  return (
    <section className="border border-solid border-gray-300 border-opacity-70 rounded-t-md filter drop-shadow-2xl z-10 fixed bottom-0 left-2/4 w-72 md:w-4/6 md:max-w-lg lg:w-11/12 lg:max-w-4xl tail-privacidade js-privacidade js-appec-escondido">
        <div className="p-3 flex flex-col gap-3 bg-white w-full lg:gap-4 lg:p-5 lg:items-center lg:flex-row tail-privacidade-interno">
          <p className="text-center text-xs lg:text-left lg:text-sm tail-privacidade-texto">
            Este site utiliza tecnologias como cookies para melhorar sua experiência de acordo com nossa política de privacidade. Ao permanecer navegando, você concorda com estas condições.    
          </p>
          <button className="mt-0 py-3 px-10 rounded self-center font-bold uppercase text-xs text-white whitespace-nowrap lg:text-sm tail-privacidade-btn js-privacidade-btn">
          Concordo    </button>
        </div>
      </section>
  )
}

export default WidgetPrivacity