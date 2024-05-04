import { FormEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { formatAndFollowUrl } from "../utils/links";

interface Props {
  storeUri: string;
}

const InputSearchMobile = ({ storeUri }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formatAndFollowUrl(`${storeUri}/busca/${inputValue}`);
  };

  return (
    <div
      data-nome="busca-2"
      className="flex-grow md:hidden tail-topo-busca ev-topo-busca js-tail-topo-inverter"
    >
      <div className="ev-topo-busca-interno">
        <form
          autoComplete="off"
          method="get"
          noValidate
          className="ev-topo-busca-form js-busca"
          onSubmit={(e) => search(e)}
        >
          <div className="tail-topo-busca-form-interno-1 ev-topo-busca-form-interno-1">
            <div className="border-[rgba(var(--border-color),1)] divide-[rgba(var(--border-color),1)] flex justify-between border-t border-b border-solid divide-x divide-solid tail-topo-busca-form-interno-2 ev-topo-busca-form-interno-2">
              <input
                type="text"
                inputMode="search"
                name="product"
                aria-label="Buscar em Joelik"
                autoCorrect="off"
                autoCapitalize="none"
                autoComplete="off"
                placeholder="Buscar produto"
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
                className="placeholder-[rgba(var(--text-color),1)] bg-transparent w-full px-4 leading-normal rounded-none outline-none py-3.5 tail-topo-busca-campo ev-topo-busca-campo js-busca-campo"
                id="topo-busca-campo-mobile"
              />
              <button
                aria-label="Enviar busca"
                type="submit"
                className="px-4 text-gray-600 bg-transparent cursor-pointer tail-topo-busca-btn-ok ev-topo-busca-btn-ok js-busca-botao"
              >
                <label htmlFor="topo-busca-campo-mobile">
                  <CiSearch style={{ fontSize: "1.5rem" }} className="theme-mode-color" />
                  <span className="sr-only">Selecionar barra de pesquisa</span>
                </label>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputSearchMobile;
