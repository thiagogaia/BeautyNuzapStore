import { IProductData } from "../../contexts/types";

interface IProps {
  productData: IProductData;
}

const ProductVariations = ({ productData }: IProps) => {
  const measures = ["PP", "P", "M", "G", "GG", "XG", "XGG", "XS", "S", "L", "XL", "XXL"];
  const productSizes: string[] = [];

  productData.variation_data.map((product) => {
    const sizes = product.item
      .map((e) => e.variation_item_name)
      .filter((e) => measures.includes(e));
    productSizes.push(...sizes);
  });

  return (
    <div className="grid gap-8 tail-prod-ver-grupo-variacoes ">
      <div className="relative grid gap-4 overflow-visible variacoes-1 js-tail-etapa-vari-div js-prod-ver-etapa-variacao-clone">
        <div
          data-vari-id={1002}
          className="overflow-visible relative grid gap-1 tail-etapa-vari-item js-tail-etapa-vari-item js-prod-ver-etapa-variacao-clone-vari "
        >
          <h2 className="cat-title flex items-center gap-1 text-gray-800 pointer-events-none tail-etapa-vari-titulo js-tail-etapa-vari-titulo">
            Tamanho:
          </h2>
          <ul className="flex flex-wrap gap-2">
            {Object.keys(productData).length > 0 && productSizes.length > 0 ? (
              productSizes.map((item, index) => (
                <li
                  key={item + index}
                  className="flex-shrink-0 flex gap-1.5 flex-wrap relative js-tail-etapa-variacao-item js-tail-etapa-comprar-topo-vari2"
                >
                  <input
                    type="radio"
                    id={item}
                    className="hidden tail-prod-ver-variacao-input ev-prod-ver-variacao-input js-tail-etapa-variacao-input js-tail-etapa-variacao-1-input"
                  />
                  <label
                    htmlFor={item}
                    className="px-1.5 h-10 grid place-content-center border border-gray-300 border-solid rounded-lg cursor-pointer ev-prod-ver-variacao-label tail-prod-ver-variacao-label tail-prod-ver-variacao-texto js-tail-etapa-variacao-label js-tail-etapa-variacao-label-texto ev-etapa-variacao-label"
                  >
                    {item}
                  </label>
                </li>
              ))
            ) : (
              <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative js-tail-etapa-variacao-item js-tail-etapa-comprar-topo-vari2">
                <label className="px-1.5 h-10 grid place-content-center border border-gray-300 border-solid rounded-lg cursor-pointer ev-prod-ver-variacao-label tail-prod-ver-variacao-label tail-prod-ver-variacao-texto js-tail-etapa-variacao-label js-tail-etapa-variacao-label-texto ev-etapa-variacao-label">
                  Tamanho não informado
                </label>
              </li>
            )}
          </ul>
        </div>

        <div
          data-sku-id={16435}
          className="tail-pers-divs-ultimas-unidades tail-pers-divs js-tail-pers-divs"
        >
          <div className="px-3 py-2 font-bold text-yellow-600 rounded-lg bg-yellow-50 w-max tail-pers-divs-ultimas-unidades-interno">
            <div className="flex items-center justify-center gap-1">
              <div className="font-bold border-b-2 border-yellow-600 border-solid tail-ultimas-unidades-qtd">
                {productData.stock}
              </div>
              <div className="tail-ultimas-unidades-texto">
                {+productData.stock === 1 ? "unidade disponível" : "unidades disponíveis"}
              </div>
            </div>
          </div>
        </div>

        {+productData.stock <= 0 ? (
          <div
            data-sku-id={16436}
            className="px-3 py-2 font-bold text-center text-red-600 rounded-lg bg-red-50 w-max tail-pers-divs-esgotado tail-pers-divs js-tail-pers-divs"
          >
            <div className="border-t border-b border-transparent border-solid">Esgotado</div>
          </div>
        ) : (
          <div
            data-sku-id="4574"
            className="px-3 py-2 font-bold text-center text-green-600 rounded-lg bg-green-50 w-max tail-pers-divs-em-estoque tail-pers-divs js-tail-pers-divs"
          >
            <div className="border-t border-b border-transparent border-solid">Em estoque</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductVariations;