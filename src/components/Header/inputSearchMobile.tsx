import { CiSearch } from "react-icons/ci";

interface Props {
  storeUri: string;
}

const InputSearchMobile = ({ storeUri }: Props) => {
  return (
    <div
      data-nome="busca-2"
      className="flex-grow md:hidden tail-topo-busca ev-topo-busca js-tail-topo-inverter"
    >
      <div className="ev-topo-busca-interno">
        <form
          action="/busca"
          autoComplete="off"
          method="get"
          noValidate
          className="ev-topo-busca-form js-busca"
        >
          <div className="tail-topo-busca-form-interno-1 ev-topo-busca-form-interno-1">
            <div className="flex justify-between border-t border-b border-gray-200 border-solid divide-x divide-gray-200 divide-solid tail-topo-busca-form-interno-2 ev-topo-busca-form-interno-2">
              <input
                type="text"
                inputMode="search"
                name="b"
                aria-label="Buscar em Joelik"
                autoCorrect="off"
                autoCapitalize="none"
                autoComplete="off"
                placeholder="Buscar produto"
                className="w-full px-4 leading-normal placeholder-gray-500 rounded-none outline-none py-3.5 tail-topo-busca-campo ev-topo-busca-campo js-busca-campo"
                id="topo-busca-campo"
              />
              <button
                aria-label="Enviar busca"
                className="px-4 text-gray-600 bg-white cursor-pointer tail-topo-busca-btn-ok ev-topo-busca-btn-ok js-busca-botao"
              >
                <label htmlFor="topo-busca-campo">
                  <CiSearch style={{ fontSize: "1.5rem" }} />
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
