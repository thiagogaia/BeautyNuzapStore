import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import { IProductData } from "../../contexts/types";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  productData: IProductData;
}

const ProductVariations = ({ productData }: IProps) => {
  const { storeData } = useContext(StoreContext);

  return (
    <div className="grid gap-8 tail-prod-ver-grupo-variacoes ">
      <div className="relative grid gap-4 overflow-visible variacoes-1 js-tail-etapa-vari-div js-prod-ver-etapa-variacao-clone">
        {productData.variation_data.length > 0 &&
          productData.variation_data.map((data) => (
            <div
              key={uuidv4()}
              className="overflow-visible relative grid gap-1 tail-etapa-vari-item js-tail-etapa-vari-item js-prod-ver-etapa-variacao-clone-vari "
            >
              <h2 className="cat-title flex items-center gap-1 text-gray-800 pointer-events-none tail-etapa-vari-titulo js-tail-etapa-vari-titulo">
                {data.name}:
              </h2>
              <ul className="flex flex-wrap gap-2">
                {data.item.length > 0 &&
                  data.item.map((item) => (
                    <li
                      key={uuidv4()}
                      className="flex-shrink-0 flex gap-1.5 flex-wrap relative js-tail-etapa-variacao-item js-tail-etapa-comprar-topo-vari2"
                    >
                      <input
                        type="radio"
                        id={item.id}
                        className="hidden tail-prod-ver-variacao-input ev-prod-ver-variacao-input js-tail-etapa-variacao-input js-tail-etapa-variacao-1-input"
                      />
                      <label
                        htmlFor={item.id}
                        className="px-1.5 h-10 grid place-content-center border border-gray-300 border-solid rounded-lg cursor-pointer ev-prod-ver-variacao-label tail-prod-ver-variacao-label tail-prod-ver-variacao-texto js-tail-etapa-variacao-label js-tail-etapa-variacao-label-texto ev-etapa-variacao-label"
                      >
                        {item.variation_item_name}
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

        {/* stock */}
        {storeData.business.control_stock_config.display_stock === "on" && (
          <div className="tail-pers-divs-ultimas-unidades tail-pers-divs js-tail-pers-divs">
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
        )}

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
        {/* stock */}
      </div>
    </div>
  );
};

export default ProductVariations;
