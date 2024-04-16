import { IProductData } from "../../contexts/types";
import "./style.css";

const CardProduct = ({ ...data }: IProductData) => {
  const measures = ["PP", "P", "M", "G", "GG", "XG", "XGG", "XS", "S", "L", "XL", "XXL"];
  const productSizes: string[] = [];

  data.variation_data.map((product) => {
    const sizes = product.item
      .map((e) => e.variation_item_name)
      .filter((e) => measures.includes(e));
    productSizes.push(...sizes);
  });

  return (
    <>
      <li
        className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item"
        data-seta-posicao="direita"
      >
        <a
          href=""
          target="_self"
          className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link"
        >
          {/* images */}
          <div
            className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile"
            style={{ paddingBottom: "133%" }}
          >
            <picture>
              <source
                srcSet={`${data.imgUrl} 200w, ${data.imgUrl} 400w, ${data.imgUrl} 600w`}
                sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px"
                type="image/jpg"
              />
              <img
                loading="lazy"
                src={data.imgUrl}
                alt={data.name}
                className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover"
              />
            </picture>
            <picture>
              <source
                srcSet={`${data.gallery.length > 0 ? data.gallery[0].imgUrl : data.imgUrl} 200w, ${
                  data.gallery.length > 0 ? data.gallery[0].imgUrl : data.imgUrl
                } 400w, ${data.gallery.length > 0 ? data.gallery[0].imgUrl : data.imgUrl} 600w`}
                sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px"
                type="image/jpg"
              />
              <img
                loading="lazy"
                src={`${data.gallery.length > 0 ? data.gallery[0].imgUrl : data.imgUrl}`}
                alt={data.name}
                className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover"
              />
            </picture>
            <div
              className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto"
              data-seta-posicao="direita"
            >
              -15%
            </div>
          </div>

          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
            <h4
              className="text-xs lg:text-sm ev-listagem-prod-nome"
              title="Vestido Longo Acetinado Vermelho"
              data-seta-posicao="direita"
            >
              {data.name}
            </h4>
            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
              {/* prices */}
              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                  {/* current price */}
                  <ins
                    className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por"
                    data-seta-posicao="direita"
                  >
                    <span className="mr-0.5">
                      {Number(data.price).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </ins>
                  {/* old price */}
                  <del
                    className="hidden flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de"
                    data-seta-posicao="direita"
                  >
                    <span className="mr-0.5">R$ 329,90</span>
                  </del>
                  {/* parcels */}
                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                    <div
                      className="hidden flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela"
                      data-seta-posicao="direita"
                    >
                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">5x</span>
                      <span className="tail-listagem-prod-precos2-parcela-cifrao">R$ 55,98</span>
                    </div>
                    <div
                      className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista"
                      data-seta-posicao="baixo"
                    >
                      <span className="mr-0.5">à vista</span>
                      <span>R$ 279,90</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* other options */}
              <div
                className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado"
                data-seta-posicao="direita"
              >
                <span>Somente logado</span>
              </div>
              <div
                className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta"
                data-seta-posicao="direita"
              >
                <span>Consulta</span>
              </div>
              <div
                className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado"
                data-seta-posicao="direita"
              >
                <span>Esgotado</span>
              </div>
            </div>
          </div>
        </a>
        {/* sizes */}
        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
            {productSizes.length > 0 ? (
              [...new Set(productSizes)].sort().map((size) => (
                <li
                  key={data.id + size}
                  className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002 grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto"
                  title="38"
                >
                  {size}
                </li>
              ))
            ) : (
              <li
                className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002 grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto"
                title="38"
              >
                Tamanho não informado
              </li>
            )}
            <li aria-hidden="true" className="hidden" />
          </ul>
        </div>
      </li>
    </>
  );
};

export default CardProduct;
