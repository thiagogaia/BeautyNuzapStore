import { IFilterTag } from "./types";

const FilterTag = ({ href, name }: IFilterTag) => {
  return (
    <li
      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
      data-nome={name}
    >
      <div>
        <a
          href={href}
          rel="next"
          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
          data-nome={name}
        >
          <div className="tail-topo-categorias-1-dados-link-0-texto">{name}</div>
        </a>
      </div>
    </li>
  );
};

export default FilterTag;
