import HeaderMenuMobile from "./HeaderMenuMobile"
import HeaderWarning from "./HeaderWarning"

const Header = () => {
  return (
    <header className="top-0 z-50 w-full overflow-visible sticky tail-cabecalho ev-cabecalho js-tail-cabecalho" data-template="1201">
      <HeaderWarning />
      <HeaderMenuMobile />
    </header>
  )
}

export default Header