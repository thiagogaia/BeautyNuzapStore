import { useContext } from "react";
import CartCard from "./cartCard";
import { StoreContext } from "../../contexts/Store";
import { ICartProductData } from "../../contexts/types";
import { v4 as uuidv4 } from "uuid";
import { formatAndFollowUrl } from "../utils/links";

interface Props {
  cart: ICartProductData[];
}
const Cart = ({ cart }: Props) => {
  const { storeUri } = useContext(StoreContext);

  const totalPrice = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

  return (
    <nav className="theme-mode-bg bg-[rgba(var(--bg-color),1)] md:bg-[rgba(var(--bg-color),.6)] fixed top-0 right-0 invisible w-64 h-screen text-sm shadow-md rounded-l-md md:w-96 ev-topo-carrinho-lista ev-topo-carrinho-1-dados-lista opacity-0 sm:bg-opacity-60 sm:backdrop-filter sm:backdrop-blur-md md:bg-opacity-60 md:backdrop-filter md:backdrop-blur-md lg:bg-opacity-60 lg:backdrop-filter lg:backdrop-blur-md xl:bg-opacity-60 xl:backdrop-filter xl:backdrop-blur-md tail-topo-sacola-lista">
      <div className="flex flex-col content-start h-full tail-topo-carrinho-interno">
        <div className="flex items-center justify-between p-5">
          <h3 className="text-sm md:text-base">Meu Carrinho</h3>
          <label htmlFor="tail-topo-sacola-toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer md:w-10 md:h-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
        <div className="p-5 text-sm font-bold text-center">
          <button
            onClick={() => formatAndFollowUrl(`${storeUri}/carrinho`)}
            className="border-[rgba(var(--border-color),1)] inline-block w-full py-4 text-center border border-solid rounded-md tail-topo-carrinho-produto-ir ev-topo-carrinho-produto-ir ev-topo-carrinho-1-produto-ir"
          >
            {cart.length > 0 ? "Ir para o carrinho" : "Carrinho vazio"}
          </button>
        </div>
        {cart.length > 0 && (
          <div className="p-5 text-sm font-bold text-center">
            <div className="flex items-center justify-center gap-1 text-base font-bold js-tail-topo-carrinho-subtotal">
              <span className="font-normal">Subtotal:</span>
              <span className="js-tail-topo-carrinho-subtotal-valor">
                {totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
        )}
        <ul className="border-[rgba(var(--border-color),1)] divide-[rgba(var(--border-color),1)] p-5 overflow-y-auto border-t border-b border-solid divide-y divide-solid js-tail-topo-carrinho-produto-lista">
          {cart.map((item) => (
            <CartCard key={uuidv4()} product={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Cart;
