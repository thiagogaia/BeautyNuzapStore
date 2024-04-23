import { useContext } from "react";
import { ICartProductData } from "../../contexts/types";
import { StoreContext } from "../../contexts/Store";
import { CartContext } from "../../contexts/cart";

interface Props {
  item: ICartProductData;
}

const CardCart = ({ item }: Props) => {
  const { storeUri } = useContext(StoreContext);
  const { addToCart, removeToCart, excludeProduct } = useContext(CartContext);

  return (
    <div
      className="flex flex-col w-full gap-2 pt-4 relative  js-carrinho-produto-listagem-item"
      data-sku={16515}
    >
      <div className="flex flex-row w-full gap-2 pt-4">
        <div className="flex-none w-28">
          <img loading="lazy" src={item.imgUrl} alt={item.name} />
        </div>
        <div className="relative grid flex-auto gap-4">
          <label
            htmlFor="Carrinho0Excluir"
            title="Remover"
            className="absolute top-0 right-0 text-xs text-red-600 underline cursor-pointer tail-carr-excluir"
            onClick={() => excludeProduct(item.variation_name)}
          >
            <svg
              className="h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".cls-1,.cls-2{fill:none;}.cls-2{stroke:#000;stroke-linecap:round;stroke-linejoin:round;}",
                  }}
                />
              </defs>
              <g data-name="Layer 2" id="Layer_2">
                <g id="Workspace">
                  <rect className="cls-1" height={24} width={24} />
                  <polyline className="cls-2" points="8 8 9 18 15 18 16 8" />
                  <line className="cls-2" x1={7} x2={17} y1={8} y2={8} />
                  <polyline className="cls-2" points="10.5 8 10.5 6 13.5 6 13.5 8" />
                  <line className="cls-2" x1="10.5" x2={11} y1={10} y2={16} />
                  <line className="cls-2" x1="13.5" x2={13} y1={10} y2={16} />
                </g>
              </g>
            </svg>
          </label>
          <div className="grid gap-2 pr-10">
            <div>
              <span
                onClick={() =>
                  (window.location.href =
                    window.location.origin + `/${storeUri}/produto/${item.uri}`)
                }
                className="text-sm font-bold leading-none hover:underline tail-carr-nome tail-carr-prod-nome"
              >
                {item.name}
              </span>
            </div>
            <div>Variação: {item.variation_name}</div>
          </div>
          <div className="relative flex items-center justify-between flex-auto gap-1 lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="js-carrinho-produto-listagem-quantidade">
              <div className="flex items-center gap-1.5 lg:flex-row">
                <button
                  type="button"
                  className="grid p-0.5 rounded-full cursor-pointer place-content-center bg-black ev-carrinho-produto-tabela-qtd-menos"
                  onClick={() => removeToCart(item.variation_name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-3 text-white ev-carrinho-produto-tabela-qtd-menos-icone"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                </button>
                <input
                  type="text"
                  name="dados[Carrinho][0][quantidade]"
                  inputMode="numeric"
                  value={item.quantity}
                  readOnly
                  className="py-2 text-center bg-gray-100 bg-opacity-50 border border-gray-200 border-solid rounded w-9 js-carrinho-produto-listagem-quantidade-input"
                />
                <button
                  type="button"
                  className="grid p-0.5 rounded-full cursor-pointer place-content-center bg-black ev-carrinho-produto-tabela-qtd-mais"
                  onClick={() => addToCart(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-3 text-white ev-carrinho-produto-tabela-qtd-mais-icone"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
                {/* save for later */}
                {/* <div className="pl-4 ml-4 text-xs border-l border-gray-300 border-solid js-carrinho-desejo-link-geral">
                  <a
                    className="text-red-600 underline cursor-pointer js-carrinho-desejo-link-fetch"
                    href="/login?redir=%2Fcarrinho"
                  >
                    Salvar para mais tarde
                  </a>
                </div> */}
              </div>
              <input
                type="checkbox"
                name="dados[Carrinho][0][quantidade]"
                id="Carrinho0Excluir"
                className="hidden form-check-check form-check-excluir"
              />
              <input type="hidden" name="dados[Carrinho][0][sku_id]" />
              <input type="hidden" name="dados[Carrinho][0][conjunto_id]" />
              <input type="hidden" name="dados[Carrinho][0][conjunto_hash]" />
              <input type="hidden" name="dados[Carrinho][0][pers_json]" />
            </div>
            <div className="text-base text-right tail-carr-prod-preco">
              <div className="gap-2 text-right tail-carr-prod-preco-parcelas">
                {item.quantity > 1 && (
                  <div className="gap-2 text-right tail-carr-prod-preco-parcelas">
                    <div className="font-bold tail-carr-prod-preco-parcelas-interno">
                      <span className="text-xs align-text-bottom tail-carr-prod-preco-parcelas-quantidade">
                        {item.quantity}x
                      </span>
                      <span className="text-xs align-text-bottom tail-carr-prod-preco-parcelas-total">
                        {item.price}
                      </span>
                    </div>
                  </div>
                )}
                <div className="font-bold tail-carr-prod-preco-parcelas-interno">
                  {(item.quantity * Number(item.price)).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
