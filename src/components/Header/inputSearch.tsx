import { FormEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { formatAndFollowUrl } from "../utils/links";

interface Props {
  storeUri: string;
}
const InputSearch = ({ storeUri }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formatAndFollowUrl(`${storeUri}/busca/${inputValue}`);
  };

  return (
    <div
      data-nome="busca-1"
      className="hidden w-56 md:block tail-topo-busca ev-topo-busca js-tail-topo-inverter"
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
            <div className="flex justify-between border border-black border-solid rounded-full tail-topo-busca-form-interno-2 ev-topo-busca-form-interno-2">
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
                className="w-full px-4 py-2 pr-0 leading-normal placeholder-black bg-transparent rounded-none outline-none tail-topo-busca-campo ev-topo-busca-campo js-busca-campo"
                id="topo-busca-campo"
              />
              <button
                aria-label="Enviar busca"
                type="submit"
                className="px-2 text-current bg-transparent cursor-pointer tail-topo-busca-btn-ok ev-topo-busca-btn-ok js-busca-botao"
              >
                <label htmlFor="topo-busca-campo">
                  <CiSearch style={{ fontSize: "1.3rem", cursor: "pointer" }} />
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

export default InputSearch;
