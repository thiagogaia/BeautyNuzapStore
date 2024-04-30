import { useContext } from "react";
import { formatAndFollowUrl } from "../utils/links";
import { StoreContext } from "../../contexts/Store";

const MainPurchaseReturns = () => {
  const { storeUri } = useContext(StoreContext);

  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="mx-auto mt-5 lg:w-9/12">
            <h1 className="text-xl font-medium tt">
              <span className="tt-texto">Devoluções</span>
            </h1>
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
            <div className="mt-5"></div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default MainPurchaseReturns;
