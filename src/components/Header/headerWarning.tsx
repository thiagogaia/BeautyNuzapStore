import "./style.css";

const HeaderWarning = () => {
  return (
    <section
      id="aviso-urgente"
      className="h-10 bg-black text-white text-center text-xs lg:text-sm aviso-urgente ev-aviso-alternado js-aviso-urgente js-aviso-alternado"
    >
      <ul className="relative w-full h-full tail-aviso-alternado-lista ev-aviso-alternado-lista">
        <li className="h-full top-0 left-0 absolute w-full tail-aviso-alternado-item tail-aviso-alternado-item-1 ev-aviso-alternado-item">
          <a
            href="https://www.vivadress.com.br/desconto/ganhei10"
            className="tail-aviso-alternado-link tail-aviso-alternado-link-1 ev-aviso-alternado-link"
          >
            <div className="flex items-center justify-center h-full tail-aviso-alternado-texto tail-aviso-alternado-texto-1 ev-aviso-alternado-texto">
              <span className="tail-aviso-alternado-texto-interno tail-aviso-alternado-texto-interno-1 ev-aviso-alternado-texto-interno">
                Cupom de Primeira compra: ¨GANHE10¨ - 10% de desconto
              </span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default HeaderWarning;
