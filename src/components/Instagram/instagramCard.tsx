import { LiHTMLAttributes } from "react";
import { IInstagramCardProps } from "../MainHome/types";

type CardProps = LiHTMLAttributes<HTMLLIElement> & IInstagramCardProps;

const InstagramCard = ({ link, img, ...props }: CardProps) => {
  return (
    <>
      <li
        {...props}
        className="border-[rgba(var(--border-color),1)] relative flex flex-col gap-1.5 border border-solid rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5"
      >
        <a href={link} target="_blank" className="flex-grow flex flex-col">
          <div className="relative group js-tail-hover-mobile" style={{ paddingBottom: "100%" }}>
            <picture>
              <img
                loading="lazy"
                src={img}
                alt="1707498900"
                className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover"
              />
            </picture>
          </div>
        </a>
      </li>
    </>
  );
};

export default InstagramCard;
