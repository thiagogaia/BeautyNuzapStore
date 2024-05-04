import { useRef } from "react";
import { IStoreData } from "../../contexts/types";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CurrencyInput from "react-currency-masked-input";

interface Props {
  storeData: IStoreData;
  categoryId: string;
  orderBy: string | null;
  maxPrice: string | null;
  variationList: string | null;
  variationItemList: string | null;
  categoryList: string | null;
}

const Filters = ({
  storeData,
  categoryId,
  orderBy,
  maxPrice,
  variationList,
  variationItemList,
  categoryList,
}: Props) => {
  const category = storeData.business.categories.find((e) => e.id === categoryId);
  const variations = storeData.business.store_variations.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  const variationItems = storeData.business.store_variation_items.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);

  const search = () => {
    if (form.current) {
      const fields = form.current.querySelectorAll("input");

      const categoriesField = [...fields]
        .filter((field) => field.name === "categories")
        .filter((field) => field.checked)
        .map((field) => field.value)
        .join(",");

      const variationsField = [...fields]
        .filter((field) => field.name === "variations")
        .filter((field) => field.checked)
        .map((field) => field.value)
        .join(",");

      const variationItemsField = [...fields]
        .filter((field) => field.name === "variationItems")
        .filter((field) => field.checked)
        .map((field) => field.value)
        .join(",");

      const maxPriceField = [...fields]
        .filter((field) => field.name === "price")
        .map((field) => field.value)
        .join(",");

      const orderByField = [...fields]
        .filter((field) => field.name === "order")
        .filter((field) => field.checked)
        .map((field) => field.defaultValue)[0];

      const params = [
        ["categories", categoriesField],
        ["variations", variationsField],
        ["variationItems", variationItemsField],
        ["order", orderByField],
        ["price", maxPriceField],
      ];

      const url = params
        .filter((e) => e[1].length > 0 && e[1] && e[1] !== "0.00")
        .map((e, index) => {
          if (index === 0) return `?${e[0]}=${e[1]}`;
          return `&${e[0]}=${e[1]}`;
        })
        .join("");

      navigate(url);
    }
  };

  return (
    <div className="py-2 lg:py-0 lg:pb-12 lg:w-60 js-appec-escondido">
      <div
        className="lg:border-[rgba(var(--border-color),1)]  flex justify-center lg:p-2 lg:rounded-lg lg:justify-end lg:border lg:border-solid ev-busca-filtro-container tail-busca-filtro-container"
        data-seta-posicao="cima"
      >
        <label
          htmlFor="buscaFiltroMostrar"
          className="theme-mode-second-color flex items-center block gap-1 cursor-pointer lg:hidden"
        >
          <span className="text-sm tail-busca-filtro-mostrar-texto">Filtros</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="theme-mode-second-color h-4 tail-busca-filtro-mostrar-vetor"
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
        <div className="theme-mode-bg border-[rgba(var(--border-color),1)] fixed top-0 right-0 bottom-0 hidden p-2 overflow-y-auto border border-solid shadow-2xl w-60 lg:p-0 lg:block lg:h-auto lg:static lg:overflow-y-hidden lg:border-0 lg:shadow-none tail-busca-filtro-mostrar">
          <div className="flex justify-end">
            <label
              htmlFor="buscaFiltroMostrar"
              className="block rounded-full p-1.5 w-max cursor-pointer lg:hidden"
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
          <form ref={form} autoComplete="off" method="get" noValidate>
            {/* order */}
            <>
              <input
                type="radio"
                name="order"
                id="FiltroNovidades"
                defaultValue="novidades"
                onChange={search}
                className="hidden"
                defaultChecked
              />
              <input
                type="radio"
                name="order"
                id="FiltroOrdenarnomeAsc"
                defaultValue="name_asc"
                onChange={search}
                className="hidden"
              />
              {/* <input
                type="radio"
                name="order"
                id="FiltroOrdenarnomeDesc"
                defaultValue="name_desc"
                onChange={search}
                className="hidden"
              /> */}
              <input
                type="radio"
                name="order"
                id="FiltroOrdenarbarato"
                defaultValue="price_asc"
                onChange={search}
                className="hidden"
              />
              <input
                type="radio"
                name="order"
                id="FiltroOrdenarcaro"
                defaultValue="price_desc"
                onChange={search}
                className="hidden"
              />
            </>

            {/* filters */}
            <div className="w-full js-appec-escondido">
              <div className="divide-[rgba(var(--border-color),1)] text-xs divide-y divide-solid tail-busca-filtro-geral">
                {/* variations */}
                <details className="select-none tail-busca-filtro-details tail-busca-filtro-details">
                  <summary className="hover:bg-[rgba(var(--border-color),.5)] flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap tail-busca-filtro-summary">
                    <span
                      className="text-sm font-bold tail-busca-filtro-nome ev-busca-filtro-nome flex items-center gap-1"
                      data-seta-posicao="cima"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 tail-busca-filtro-nome-svg ev-busca-filtro-nome-svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                        />
                      </svg>
                      Variações
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="theme-mode-second-color relative w-4 h-4 mr-0.5 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>

                  <div className="grid gap-2 px-1 pb-4 text-left tail-busca-filtro-texto">
                    <div className="grid grid-cols-1 gap-2 px-1 pt-2 pb-4 tail-busca-tag-lista">
                      {variations.map((variation) => (
                        <div className="flex items-start gap-2" key={uuidv4()}>
                          <input
                            type="checkbox"
                            id={variation.id}
                            name="variations"
                            value={variation.id}
                            onChange={search}
                            checked={
                              variationList !== null &&
                              variationList.split(",").includes(variation.id)
                                ? true
                                : false
                            }
                            className="border-[rgba(var(--border-color),1)] flex-shrink-0 align-top rounded-full outline-none cursor-pointer ring-0 disabled-bg"
                          />
                          <label htmlFor={variation.id} className="flex flex-wrap gap-1">
                            <div>{variation.name}</div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>

                {/* variation items */}
                <details className="select-none tail-busca-filtro-details">
                  <summary className="hover:bg-[rgba(var(--border-color),.5)] flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap tail-busca-filtro-summary">
                    <span
                      className="text-sm font-bold tail-busca-filtro-nome ev-busca-filtro-nome flex items-center gap-1"
                      data-seta-posicao="cima"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 tail-busca-filtro-nome-svg ev-busca-filtro-nome-svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                        />
                      </svg>
                      Itens das Variações
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="theme-mode-second-color relative w-4 h-4 mr-0.5 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <div className="grid gap-2 px-1 pb-4 text-left tail-busca-filtro-texto">
                    <div className="grid grid-cols-1 gap-2 px-1 pt-2 pb-4 tail-busca-tag-lista">
                      {variationItems.map((item) => (
                        <div className="flex items-start gap-2" key={uuidv4()}>
                          <input
                            type="checkbox"
                            id={item.id}
                            name="variationItems"
                            value={item.id}
                            onChange={search}
                            checked={
                              variationItemList !== null &&
                              variationItemList.split(",").includes(item.id)
                                ? true
                                : false
                            }
                            className="border-[rgba(var(--border-color),1)] flex-shrink-0 align-top rounded-full outline-none cursor-pointer ring-0 disabled-bg"
                          />
                          <label htmlFor={item.id} className="flex flex-wrap gap-1">
                            <div>{item.name}</div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>

                {/* categories */}
                <details className="select-none tail-busca-filtro-details">
                  <summary className="hover:bg-[rgba(var(--border-color),.5)] flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap tail-busca-filtro-summary">
                    <span
                      className="text-sm font-bold tail-busca-filtro-nome ev-busca-filtro-nome flex items-center gap-1"
                      data-seta-posicao="cima"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 tail-busca-filtro-nome-svg ev-busca-filtro-nome-svg"
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
                      className="theme-mode-second-color relative w-4 h-4 mr-0.5 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <div className="grid gap-2 px-1 pb-4 text-left tail-busca-filtro-texto">
                    <ul className="pt-2 pl-4 grid gap-2 list-disc">
                      {category !== undefined ? (
                        <li className="pt-2">
                          <p>{category?.name}</p>
                        </li>
                      ) : (
                        storeData.business.categories.map((cat) => (
                          <div className="flex items-start gap-2" key={cat.id}>
                            <input
                              type="checkbox"
                              id={cat.id}
                              name="categories"
                              value={cat.id}
                              onChange={search}
                              checked={
                                categoryList !== null && categoryList.split(",").includes(cat.id)
                                  ? true
                                  : false
                              }
                              className="border-[rgba(var(--border-color),1)] flex-shrink-0 align-top rounded-full outline-none cursor-pointer ring-0 disabled-bg"
                            />
                            <label htmlFor={cat.id} className="flex flex-wrap gap-1">
                              <div>{cat.name}</div>
                            </label>
                          </div>
                        ))
                      )}
                    </ul>
                  </div>
                </details>

                {/* order mobile labels */}
                <details className="lg:hidden select-none tail-busca-filtro-details">
                  <summary className="hover:bg-[rgba(var(--border-color),.5)] flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap tail-busca-filtro-summary">
                    <span className="flex items-center gap-1 text-sm font-bold tail-busca-filtro-nome">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 tail-busca-filtro-nome-svg"
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
                      className="theme-mode-second-color relative w-4 h-4 mr-0.5 tail-busca-filtro-icone"
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
                      htmlFor="FiltroNovidades"
                      data-nome="Nome"
                      className="hover:bg-[rgba(var(--border-color),.5)] flex items-center gap-2 p-2 text-sm cursor-pointer tail-busca-filtro-label"
                    >
                      <div
                        style={{
                          backgroundColor:
                            orderBy === null || orderBy === "novidades"
                              ? "rgba(var(--reverse-color), 1)"
                              : "transparent",
                        }}
                        className="border-[rgba(var(--border-color),1)] w-4 h-4 border border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Novidades</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarnomeAsc"
                      data-nome="Nome"
                      className="hover:bg-[rgba(var(--border-color),.5)] flex items-center gap-2 p-2 text-sm cursor-pointer tail-busca-filtro-label"
                    >
                      <div
                        style={{
                          backgroundColor:
                            orderBy !== null && orderBy === "name_asc"
                              ? "rgba(var(--reverse-color), 1)"
                              : "transparent",
                        }}
                        className="border-[rgba(var(--border-color),1)] w-4 h-4 border border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Nome A - Z</span>
                    </label>
                    {/* <label
                      htmlFor="FiltroOrdenarnomeDesc"
                      data-nome="Nome"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div
                        style={{
                          backgroundColor:
                            orderBy !== null && orderBy === "name_desc" ? "rgba(var(--reverse-color), 1)" : "transparent",
                        }}
                        className="border-[rgba(var(--border-color),1)] w-4 h-4 bg-white border border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Nome Z - A</span>
                    </label> */}
                    <label
                      htmlFor="FiltroOrdenarbarato"
                      data-nome="Menor preço"
                      className="hover:bg-[rgba(var(--border-color),.5)] flex items-center gap-2 p-2 text-sm cursor-pointer tail-busca-filtro-label"
                    >
                      <div
                        style={{
                          backgroundColor:
                            orderBy !== null && orderBy === "price_asc"
                              ? "rgba(var(--reverse-color), 1)"
                              : "transparent",
                        }}
                        className="border-[rgba(var(--border-color),1)] w-4 h-4 border border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Menor preço</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarcaro"
                      data-nome="Maior preço"
                      className="hover:bg-[rgba(var(--border-color),.5)] flex items-center gap-2 p-2 text-sm cursor-pointer tail-busca-filtro-label"
                    >
                      <div
                        style={{
                          backgroundColor:
                            orderBy !== null && orderBy === "price_desc"
                              ? "rgba(var(--reverse-color), 1)"
                              : "transparent",
                        }}
                        className="border-[rgba(var(--border-color),1)] w-4 h-4 border border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Maior preço</span>
                    </label>
                  </div>
                </details>

                {/* price */}
                <details className="select-none tail-busca-filtro-details tail-busca-filtro-details-preco">
                  <summary className="hover:bg-[rgba(var(--border-color),.5)] flex items-center justify-between px-1 py-2 list-none cursor-pointer whitespace-nowrap tail-busca-filtro-summary">
                    <span className="text-sm font-bold tail-busca-filtro-nome ev-busca-filtro-nome flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 tail-busca-filtro-nome-svg ev-busca-filtro-nome-svg"
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
                      className="theme-mode-second-color relative w-4 h-4 tail-busca-filtro-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <div className="overflow-visible flex gap-2 px-1 pt-2 pb-4 tail-busca-tag-lista">
                    {/* <div className="flex-shrink">
                      <div className="pl-2 font-bold">Mínimo:</div>
                      <input
                        type="text"
                        name="preco1"
                        defaultValue=""
                        placeholder="De"
                        className="border-[rgba(var(--border-color),1)] w-full p-2 text-xs text-black bg-white border border-solid rounded-lg shadow-sm outline-none focus:border-indigo-500 ring-0 disabled-bg js-imask-moeda"
                        autoComplete="off"
                        inputMode="decimal"
                        pattern="[0-9]*"
                        data-mascara-decimal-validar={1}
                      />
                    </div> */}
                    <div className="flex-shrink">
                      <div className="pl-2 font-bold">Máximo:</div>

                      <CurrencyInput
                        type="text"
                        name="price"
                        defaultValue={maxPrice !== null && Number(maxPrice) > 0 ? maxPrice : ""}
                        placeholder="Até"
                        className="theme-mode-bg border-[rgba(var(--border-color),1)] w-full p-2 text-xs border border-solid rounded-lg shadow-sm outline-none focus:border-indigo-500 ring-0 disabled-bg js-imask-moeda"
                        autoComplete="off"
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                          e.key === "Enter" && e.preventDefault()
                        }
                      />
                    </div>
                    <div className="self-end flex-shrink-0">
                      <button
                        type="button"
                        onClick={search}
                        className="border-[rgba(var(--border-color),1)] border border-solid p-2 text-white bg-black rounded-lg ev-busca-filtro-preco-btn tail-busca-filtro-preco-botao"
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
                {/* <details className="select-none tail-busca-filtro-details tail-busca-filtro-details-varis">
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
                        className="border-[rgba(var(--border-color),1)] flex flex items-center border-2 border-solid rounded-full cursor-pointer w-9 h-9 tail-busca-filtro-variacao-label tail-busca-filtro-variacao-cor text-center"
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
                  </ul>
                </details> */}

                {/* size */}
                {/* <details className="select-none tail-busca-filtro-details tail-busca-filtro-details-varis">
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
                      Variações
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
                        className="border-[rgba(var(--border-color),1)] flex p-0.5 grid border border-solid rounded-lg cursor-pointer w-full place-content-center tail-busca-filtro-variacao-label tail-busca-filtro-variacao-2-label text-center"
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
                  </ul>
                </details> */}

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
                        className="border-[rgba(var(--border-color),1)] flex-shrink-0 align-top rounded-full outline-none cursor-pointer ring-0 disabled-bg"
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
