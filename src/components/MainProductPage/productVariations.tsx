import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import { IProductData, IProductVariationData, IProductVariationItem } from "../../contexts/types";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  productData: IProductData;
  variation: string;
  variationItem: string;
  setVariation: (e: string) => void;
  setVariationId: (e: string) => void;
  setVariationItem: (e: string) => void;
  setVariationItemId: (e: string) => void;
  setSlideIndex: (e: number) => void;
}

const ProductVariations = ({
  productData,
  variation,
  setVariation,
  setVariationId,
  variationItem,
  setVariationItem,
  setVariationItemId,
  setSlideIndex,
}: IProps) => {
  const { storeData } = useContext(StoreContext);
  const currentVariation = productData.variation_data.find((e) => e.name == variation);

  const selectVariation = (
    prodVariation: IProductVariationData | IProductVariationItem,
    type: "first" | "second"
  ) => {
    if (type === "second") {
      const item = prodVariation as IProductVariationItem;
      setVariationItem(item.variation_item_name);
      setVariationItemId(item.id);
    } else {
      const newVariation = productData.variation_data.find((e) => e.name == prodVariation.name);
      if (newVariation !== undefined) {
        setVariation(newVariation.name);
        setVariationId(newVariation.id);
        setSlideIndex(0);

        setVariationItem(newVariation.item[0].variation_item_name);
        setVariationItemId(newVariation.item[0].id);
      }
    }
  };

  return (
    <div className="grid gap-8 tail-prod-ver-grupo-variacoes ">
      <div className="relative grid gap-4 overflow-visible variacoes-1 js-tail-etapa-vari-div js-prod-ver-etapa-variacao-clone">
        {variation.length > 0 && (
          <>
            Variações:
            {productData.variation_data.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {productData.variation_data.map((data) => (
                  <li
                    key={uuidv4()}
                    className="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item"
                  >
                    <label
                      htmlFor={data.id}
                      className="flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                    >
                      <input
                        type="radio"
                        name="variation"
                        id={data.id}
                        value={data.name}
                        checked={variation === data.name ? true : false}
                        onChange={() => selectVariation(data, "first")}
                        className="sr-only"
                      />
                      <img
                        style={{ borderRadius: "50%" }}
                        src={data.imgThumbUrl !== "" ? data.imgThumbUrl : "/no-image.jpg"}
                        title={data.name}
                        alt={data.name}
                      />
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
        {variationItem.length > 0 && (
          <>
            Itens da Variação:
            {currentVariation !== undefined && currentVariation.item.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {currentVariation.item.map((data) => (
                  <li
                    key={uuidv4()}
                    className="flex-shrink-0 flex gap-1.5 flex-wrap relative js-tail-etapa-variacao-item js-tail-etapa-comprar-topo-vari2"
                  >
                    <input
                      type="radio"
                      name="variationItem"
                      id={data.variation_item_id}
                      onChange={() => selectVariation(data, "second")}
                      checked={variationItem === data.variation_item_name ? true : false}
                      className="hidden tail-prod-ver-variacao-input ev-prod-ver-variacao-input js-tail-etapa-variacao-input js-tail-etapa-variacao-1-input"
                    />
                    <label
                      htmlFor={data.variation_item_id}
                      className="px-1.5 h-10 grid place-content-center border border-gray-300 border-solid rounded-lg cursor-pointer ev-prod-ver-variacao-label tail-prod-ver-variacao-label tail-prod-ver-variacao-texto js-tail-etapa-variacao-label js-tail-etapa-variacao-label-texto ev-etapa-variacao-label"
                    >
                      {data.variation_item_name}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
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
