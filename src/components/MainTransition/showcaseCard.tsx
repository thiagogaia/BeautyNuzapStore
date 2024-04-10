const ShowcaseCard = () => {
  return (
    <>
      <li
        className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4"
        data-seta-posicao="direita"
      >
        <a
          href="/prod/2554/estola-de-pele-prata"
          target="_self"
          className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link"
        >
          <div
            className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile"
            style={{ paddingBottom: "133%" }}
          >
            <picture>
              <img
                loading="lazy"
                src="https://thumb.braavo.me/vivadress/400/1947090195.jpg"
                alt="Estola de Pele Prata"
                className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover"
              />
            </picture>
            <picture>
              <img
                loading="lazy"
                src="https://thumb.braavo.me/vivadress/400/867059651.jpg"
                alt="Estola de Pele Prata"
                className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover"
              />
            </picture>
            <div
              className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto"
              data-seta-posicao="direita"
            >
              -13%
            </div>
          </div>
          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
            <h4
              className="text-xs lg:text-sm ev-listagem-prod-nome"
              title="Estola de Pele Prata"
              data-seta-posicao="direita"
            >
              Estola de Pele Prata
            </h4>
            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                  <ins
                    className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por"
                    data-seta-posicao="direita"
                  >
                    <span className="mr-0.5">R$ 199,90</span>
                  </ins>
                  <del
                    className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de"
                    data-seta-posicao="direita"
                  >
                    <span className="mr-0.5">R$ 229,90</span>
                  </del>
                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                    <div
                      className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela"
                      data-seta-posicao="direita"
                    >
                      <span className="tail-listagem-prod-precos2-parcela-cifrao">3x R$ 66,63</span>
                    </div>
                    <div
                      className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista"
                      data-seta-posicao="baixo"
                    >
                      <span className="mr-0.5">à vista</span>
                      <span>R$</span>
                      <span>199,90</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
            <li
              className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002"
              title="Único"
            >
              <a
                href="/prod/2554/estola-de-pele-prata#s16353"
                target="_self"
                className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto"
              >
                Único
              </a>
            </li>
            <li aria-hidden="true" className="hidden" />
          </ul>
        </div>
      </li>
    </>
  );
};

export default ShowcaseCard;
