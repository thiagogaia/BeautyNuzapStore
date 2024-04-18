import { IProductData, IStoreData } from "../../contexts/types";
import Product from "../../pages/Product";
import ProductList from "../../pages/ProductList";

interface Props {
  storeData: IStoreData;
  productList: IProductData[];
  categoryId: string;
}

const Filters = ({ storeData, productList, categoryId }: Props) => {
  const category = storeData.business.categories.find((e) => e.id === categoryId);

  // console.log(productList);

  return (
    <div className="py-2 lg:py-0 lg:pb-12 lg:w-60 js-appec-escondido">
      <div
        className="flex justify-center lg:p-2 lg:rounded-lg lg:justify-end lg:border lg:border-solid lg:border-gray-300 ev-busca-filtro-container tail-busca-filtro-container"
        data-seta-posicao="cima"
      >
        <label
          htmlFor="buscaFiltroMostrar"
          className="flex items-center block gap-1 text-gray-700 cursor-pointer lg:hidden"
        >
          <span className="text-sm text-gray-700 tail-busca-filtro-mostrar-texto">Filtros</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 text-gray-500 tail-busca-filtro-mostrar-vetor"
          >
            <path
              fillRule="evenodd"
              d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <input
          id="buscaFiltroMostrar"
          type="checkbox"
          className="hidden tail-busca-filtro-mostrar-btn-input"
        />
        <div className="fixed top-0 right-0 bottom-0 hidden p-2 overflow-y-auto bg-white border border-gray-200 border-solid shadow-2xl w-60 lg:p-0 lg:block lg:h-auto lg:static lg:overflow-y-hidden lg:border-0 lg:shadow-none tail-busca-filtro-mostrar">
          <div className="flex justify-end">
            <label
              htmlFor="buscaFiltroMostrar"
              className="block rounded-full p-1.5 w-max cursor-pointer hover:bg-gray-100 lg:hidden"
            >
              <svg
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>
          <form action="/cat/17/ver-todos" autoComplete="off" method="get" noValidate>
            <input type="hidden" name="b" defaultValue="" />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenarbarato"
              defaultValue="barato"
              // onchange="this.form.submit();"
              className="hidden"
            />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenarcaro"
              defaultValue="caro"
              // onchange="this.form.submit();"
              className="hidden"
            />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenardesconto"
              defaultValue="desconto"
              // onchange="this.form.submit();"
              className="hidden"
            />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenarvendas"
              defaultValue="vendas"
              // onchange="this.form.submit();"
              className="hidden"
            />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenarpop"
              defaultValue="pop"
              defaultChecked
              // onchange="this.form.submit();"
              className="hidden"
            />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenarnome"
              defaultValue="nome"
              // onchange="this.form.submit();"
              className="hidden"
            />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenarnovo"
              defaultValue="novo"
              // onchange="this.form.submit();"
              className="hidden"
            />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenarestoque"
              defaultValue="estoque"
              // onchange="this.form.submit();"
              className="hidden"
            />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenarrelev"
              defaultValue="relev"
              // onchange="this.form.submit();"
              className="hidden"
            />
            <input
              type="radio"
              name="o1"
              id="FiltroOrdenaraleat"
              defaultValue="aleat"
              // onchange="this.form.submit();"
              className="hidden"
            />
            <div className="w-full js-appec-escondido">
              <div className="text-xs divide-y divide-gray-200 divide-solid tail-busca-filtro-geral">
                {/* categories */}
                <details className="select-none tail-busca-filtro-details tail-busca-filtro-details-cates">
                  <summary className="flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap hover:bg-gray-100 tail-busca-filtro-summary">
                    <span
                      className="text-sm font-bold text-gray-700 tail-busca-filtro-nome ev-busca-filtro-nome flex items-center gap-1"
                      data-seta-posicao="cima"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 text-gray-500 tail-busca-filtro-nome-svg ev-busca-filtro-nome-svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                      Categorias
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="relative w-4 h-4 text-gray-400 mr-0.5 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <div className="grid gap-2 px-1 pb-4 text-left text-gray-700 tail-busca-filtro-texto">
                    <ul className="list-disc grid gap-2 text-xs divide-y divide-gray-300 divide-solid">
                      <li className="pt-2">
                        <a href="#">{category?.name}</a>
                      </li>
                    </ul>
                  </div>
                </details>

                {/* order mobile */}
                <details className="lg:hidden select-none tail-busca-filtro-details">
                  <summary className="flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap hover:bg-gray-100 tail-busca-filtro-summary">
                    <span className="flex items-center gap-1 text-sm font-bold text-gray-700 tail-busca-filtro-nome">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 text-gray-500 tail-busca-filtro-nome-svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                        />
                      </svg>
                      Ordenar
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="relative w-4 h-4 text-gray-400 mr-0.5 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <div className="grid pb-4">
                    <label
                      htmlFor="FiltroOrdenarbarato"
                      data-nome="Menor preço"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Menor preço</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarcaro"
                      data-nome="Maior preço"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Maior preço</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenardesconto"
                      data-nome="Melhor desconto"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Melhor desconto</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarvendas"
                      data-nome="Mais vendidos"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Mais vendidos</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarpop"
                      data-nome="Popular"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-black border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Popular</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarnome"
                      data-nome="Nome"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Nome</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarnovo"
                      data-nome="Lançamentos"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Lançamentos</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarestoque"
                      data-nome="Estoque"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Estoque</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarrelev"
                      data-nome="Relevantes"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Relevantes</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenaraleat"
                      data-nome="Aleatórios"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full">
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Aleatórios</span>
                    </label>
                  </div>
                </details>

                {/* price */}
                <details className="select-none tail-busca-filtro-details tail-busca-filtro-details-preco">
                  <summary className="flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap hover:bg-gray-100 tail-busca-filtro-summary">
                    <span className="text-sm font-bold text-gray-700 tail-busca-filtro-nome ev-busca-filtro-nome flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 text-gray-500 tail-busca-filtro-nome-svg ev-busca-filtro-nome-svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Preços
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="relative w-4 h-4 text-gray-400 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <div className="overflow-visible flex gap-2 px-1 pt-2 pb-4 text-gray-700 tail-busca-tag-lista">
                    <div className="flex-shrink">
                      <div className="pl-2 font-bold">Mínimo:</div>
                      <input
                        type="text"
                        name="preco1"
                        defaultValue=""
                        placeholder="De"
                        className="w-full p-2 text-xs text-black bg-white border border-gray-300 border-solid rounded-lg shadow-sm outline-none focus:border-indigo-500 ring-0 disabled-bg js-imask-moeda"
                        autoComplete="off"
                        inputMode="decimal"
                        pattern="[0-9]*"
                        data-mascara-decimal-validar={1}
                      />
                    </div>
                    <div className="flex-shrink">
                      <div className="pl-2 font-bold">Máximo:</div>
                      <input
                        type="text"
                        name="preco2"
                        defaultValue=""
                        placeholder="Até"
                        className="w-full p-2 text-xs text-black bg-white border border-gray-300 border-solid rounded-lg shadow-sm outline-none focus:border-indigo-500 ring-0 disabled-bg js-imask-moeda"
                        autoComplete="off"
                        inputMode="decimal"
                        pattern="[0-9]*"
                        data-mascara-decimal-validar={1}
                      />
                    </div>
                    <div className="self-end flex-shrink-0">
                      <button
                        type="submit"
                        className="border border-solid border-gray-300 p-2 text-white bg-black rounded-lg ev-busca-filtro-preco-btn tail-busca-filtro-preco-botao"
                        data-seta-posicao="cima"
                      >
                        <span className="sr-only">Filtrar</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </details>

                {/* color */}
                <details className="select-none tail-busca-filtro-details tail-busca-filtro-details-varis">
                  <summary className="flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap hover:bg-gray-100 tail-busca-filtro-summary">
                    <span className="text-sm font-bold text-gray-700 tail-busca-filtro-nome ev-busca-filtro-nome flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 text-gray-500 tail-busca-filtro-nome-svg ev-busca-filtro-nome-svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                        />
                      </svg>
                      Cor
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="relative w-4 h-4 text-gray-400 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <ul className="grid grid-cols-5 justify-items-center overflow-auto max-h-96 gap-2 px-1 pt-2 pb-4 text-gray-700 tail-busca-tag-lista">
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1300"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1300"
                            defaultValue={1300}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/2931042245.webp"
                          title="Marinho A"
                          alt="Marinho A"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1259"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1259"
                            defaultValue={1259}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/3007139633.webp"
                          title="Azul Royal B"
                          alt="Azul Royal B"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1485"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1485"
                            defaultValue={1485}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/165226872.webp"
                          title="Azul Turquesa A"
                          alt="Azul Turquesa A"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1618"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1618"
                            defaultValue={1618}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/880672682.webp"
                          title="Branco D"
                          alt="Branco D"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1397"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1397"
                            defaultValue={1397}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/1572455586.webp"
                          title="Cinza A"
                          alt="Cinza A"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1697"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1697"
                            defaultValue={1697}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/3642403535.webp"
                          title="Cinza H"
                          alt="Cinza H"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1621"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1621"
                            defaultValue={1621}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/3522080908.webp"
                          title="Fúcsia A A"
                          alt="Fúcsia A A"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1164"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1164"
                            defaultValue={1164}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/3963160522.webp"
                          title="Fúcsia B"
                          alt="Fúcsia B"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1363"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1363"
                            defaultValue={1363}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/2043620072.webp"
                          title="Lilás H"
                          alt="Lilás H"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1053"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1053"
                            defaultValue={1053}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/2571858009.gif"
                          title="Marsala"
                          alt="Marsala"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1651"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1651"
                            defaultValue={1651}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/2896017108.webp"
                          title="Nude F"
                          alt="Nude F"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1047"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1047"
                            defaultValue={1047}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/2734987390.webp"
                          title="Preto"
                          alt="Preto"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1680"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1680"
                            defaultValue={1680}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/3051652028.webp"
                          title="Rose AW"
                          alt="Rose AW"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1284"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1284"
                            defaultValue={1284}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/1790848673.webp"
                          title="Vermelho A"
                          alt="Vermelho A"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                    <li className="relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer overflow-visible tail-busca-filtro-variacao-cor-item">
                      <label
                        htmlFor="FiltroVari1299"
                        className="flex flex items-center border-2 border-gray-300 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1299"
                            defaultValue={1299}
                            // onchange="this.form.submit();"
                            className="sr-only tail-busca-filtro-variacao-cor-checkbox"
                          />
                        </div>
                        <img
                          src="/696776394.webp"
                          title="Rose G"
                          alt="Rose G"
                          className="w-full h-full rounded-full"
                        />
                      </label>
                    </li>
                  </ul>
                </details>

                {/* size */}
                <details className="select-none tail-busca-filtro-details tail-busca-filtro-details-varis">
                  <summary className="flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap hover:bg-gray-100 tail-busca-filtro-summary">
                    <span className="text-sm font-bold text-gray-700 tail-busca-filtro-nome ev-busca-filtro-nome flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 text-gray-500 tail-busca-filtro-nome-svg ev-busca-filtro-nome-svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                        />
                      </svg>
                      Tamanho
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="relative w-4 h-4 text-gray-400 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <ul className="grid grid-cols-4 justify-items-center overflow-auto max-h-96 gap-2 px-1 pt-2 pb-4 text-gray-700 tail-busca-tag-lista">
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1003"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1003"
                            defaultValue={1003}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        36
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1004"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1004"
                            defaultValue={1004}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        38
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1005"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1005"
                            defaultValue={1005}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        40
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1006"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1006"
                            defaultValue={1006}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        42
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1007"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1007"
                            defaultValue={1007}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        44
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1008"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1008"
                            defaultValue={1008}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        46
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1009"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1009"
                            defaultValue={1009}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        48
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1010"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1010"
                            defaultValue={1010}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        50
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1011"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1011"
                            defaultValue={1011}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        52
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1016"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1016"
                            defaultValue={1016}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        G
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1017"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1017"
                            defaultValue={1017}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        GG
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1015"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1015"
                            defaultValue={1015}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        M
                      </label>
                    </li>
                    <li className="flex-shrink-0 flex gap-1.5 flex-wrap w-full relative">
                      <label
                        htmlFor="FiltroVari1012"
                        className="flex p-0.5 grid border border-gray-300 border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="v1[]"
                            id="FiltroVari1012"
                            defaultValue={1012}
                            // onchange="this.form.submit();"
                            className="hidden"
                          />
                        </div>
                        Único
                      </label>
                    </li>
                  </ul>
                </details>

                {/* highlights */}
                {/* <details className="select-none tail-busca-filtro-details tail-busca-filtro-details-dests">
                  <summary className="flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap hover:bg-gray-100 tail-busca-filtro-summary">
                    <span className="text-sm font-bold text-gray-700 tail-busca-filtro-nome ev-busca-filtro-nome flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 text-gray-500 tail-busca-filtro-nome-svg ev-busca-filtro-nome-svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
                      Destaques
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="relative w-4 h-4 text-gray-400 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <div className="grid grid-cols-1 gap-2 px-1 pt-2 pb-4 text-gray-700 tail-busca-tag-lista">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="d1[]"
                        id="FiltroDest4"
                        defaultValue={4}
                        // onchange="this.form.submit();"
                        className="flex-shrink-0 align-top border-gray-400 rounded-full outline-none cursor-pointer ring-0 disabled-bg"
                      />
                      <label htmlFor="FiltroDest4" className="flex gap-1">
                        <div>Super Desconto (2)</div>
                      </label>
                    </div>
                  </div>
                </details> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filters;
