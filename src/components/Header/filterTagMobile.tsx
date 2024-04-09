import { IFilterTag } from "./types";

const FilterTagMobile = ({ href, name }: IFilterTag) => {
  return (
    <div className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0">
      <div className="flex items-center gap-2">
        <a
          href={href}
          rel="next"
          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
          data-nome={name}
        >
          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
            {name}
          </div>
        </a>
      </div>
    </div>
  );
};

export default FilterTagMobile;
