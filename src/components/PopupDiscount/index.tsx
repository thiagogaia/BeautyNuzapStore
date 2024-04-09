import './style.css'
const PopupDiscount = () => {
  return (
    <>
      <div
        className="popup-news js-popup-news escondido"
        data-tipo-exibicao={1}
        data-fechar-esc={1}
        data-fechar-area-externa={1}
        data-apenas-imagem={0}
        data-tempo-de-espera={3}
        data-visualizacao-maxima={2}
        data-visualizacao-reset
        data-form={1}
        data-font-family="site"
      >
        <div className="popup-news-interno js-popup-news-interno">
          <button
            data-aria="Fechar Modal de Newsletter"
            className="popup-news-fechar js-popup-news-fechar"
          >
            <svg
              className="popup-news-fechar-vetor"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="12px"
              height="12px"
              viewBox="0 0 14 14"
              enableBackground="new 0 0 14 14"
              xmlSpace="preserve"
            >
              <path d="M14,1.4L12.6,0L7,5.6L1.4,0L0,1.4L5.6,7L0,12.6L1.4,14L7,8.4l5.6,5.6l1.4-1.4L8.4,7L14,1.4z"></path>
            </svg>
          </button>
          <figure className="popup-news-foto-computador popup-news-foto-computador-principal">
            <img
              src="https://thumb.braavo.me/vivadress/0/569134886.webp"
              alt="Newsletter"
              className="popup-news-imagem popup-news-imagem-computador"
            />
          </figure>
          <figure className="popup-news-foto-celular">
            <img
              src="https://thumb.braavo.me/vivadress/0/3848092405.webp"
              alt="Newsletter"
              className="popup-news-imagem popup-news-imagem-celular"
            />
          </figure>
          <section className="popup-news-tela-1 js-popup-news-tela-1 ">
            <h1 className="popup-news-tela-1-titulo js-popup-news-tela-1-titulo js-popup-news-testar-font-weight">
              10% OFF NA SUA
              <br />
              PRIMEIRA COMPRA
            </h1>
            <p className="popup-news-tela-1-desc-1 popup-news-desc js-popup-news-testar-font-weight">
              Informe o seu melhor e-mail e GANHE 10% OFF na sua primeira
              compra.
            </p>
            <div
              className="popup-news-tela-1-form js-popup-news-form"
              noValidate
            >
              <div className="popup-news-tela-1-nome">
                <input
                  type="text"
                  defaultValue
                  placeholder="Digite seu nome"
                  className="popup-news-tela-1-campo popup-news-tela-1-campo-nome js-popup-news-nome js-popup-news-testar-font-weight"
                />
              </div>
              <div className="popup-news-tela-1-email">
                <input
                  type="email"
                  defaultValue
                  placeholder="Digite seu e-mail"
                  className="popup-news-tela-1-campo popup-news-tela-1-campo-email js-popup-news-email js-popup-news-testar-font-weight"
                />
              </div>
              <input
                type="button"
                defaultValue="Ganhar Desconto"
                className="popup-news-tela-1-btn popup-news-btn js-popup-news-btn js-popup-news-testar-font-weight"
              />
            </div>
            <p className="popup-news-tela-1-info js-popup-news-testar-font-weight">
              *Cupom não cumulativo
            </p>
          </section>
          {/* tela-1 */}
          <section className="popup-news-tela-2 js-popup-news-tela-2 escondido">
            <p className="popup-news-tela-2-desc-1 popup-news-desc js-popup-news-testar-font-weight">
              Obrigado, você ganhou 10% off.
            </p>
            <p className="popup-news-tela-2-desc-2 popup-news-desc js-popup-news-testar-font-weight">
              Clique no botão a baixo para ativar o seu desconto
            </p>
            <a
              href="https://www.vivadress.com.br/desconto/ganhei10"
              className="popup-news-tela-2-btn popup-news-btn js-popup-news-btn js-popup-news-testar-font-weight"
            >
              ATIVAR DESCONTO{" "}
            </a>
          </section>
          {/* tela-2 */}
          <a
            href="https://www.vivadress.com.br/desconto/ganhei10"
            className="popup-news-mascara js-popup-mascara escondido"
          />
        </div>
        {/* interno */}
      </div>
      {/* news */}
    </>
  );
};

export default PopupDiscount;
