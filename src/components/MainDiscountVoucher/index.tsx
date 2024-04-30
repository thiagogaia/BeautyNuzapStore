import { useContext } from "react";
import { formatAndFollowUrl } from "../utils/links";
import { StoreContext } from "../../contexts/Store";

const MainDiscountVoucher = () => {
  const { storeUri } = useContext(StoreContext);

  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="grid w-full gap-1 px-1 mx-auto mt-8 lg:max-w-4xl md:p-4">
            <div className="grid gap-8">
              <div>
                <span
                  onClick={() => formatAndFollowUrl(`${storeUri}/conta`)}
                  className="cursor-pointer flex items-center inline-block gap-1 px-4 py-2 bg-gray-100 rounded-lg w-max hover:bg-gray-200 tail-btn-voltar js-appec-escondido"
                >
                  <svg
                    xmlns="//www.w3.org/2000/svg"
                    className="h-3 lg:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="font-semibold">Voltar</span>
                </span>
              </div>
              <div className="grid gap-4">
                <h1 className="mb-0 text-2xl tt">
                  <span className="tt-texto text-2xl">Vale-Desconto</span>
                </h1>
                <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 js-paginacao-lista">
                  <li className="flex flex-col justify-between p-2 space-y-2 text-center border border-gray-300 border-solid rounded-lg js-paginacao-item">
                    <div>
                      <div className="font-bold">Código</div>
                      <div className="text-base">
                        <a
                          href="/desconto/ganhe10"
                          target="_blank"
                          className="text-black underline"
                        >
                          ganhe10
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Desconto</div>
                      <div className="text-base">10%</div>
                    </div>
                    <div>
                      <div className="font-bold">Frete Grátis</div>
                      <div className="flex justify-center text-base">
                        <img
                          src="https://static.braavo.com.br/webroot/img/admin/icons/cross.png"
                          className="inline-block w-4 h-4 align-top object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Compra Mínima</div>
                      <div className="text-base">R$ 0,00</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default MainDiscountVoucher;
