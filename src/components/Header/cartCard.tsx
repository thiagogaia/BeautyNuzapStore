import { ICartProductData } from "../../contexts/types";

interface Props {
  product: ICartProductData;
}

const CartCard = ({ product }: Props) => {
  return (
    <li>
      <div>
        <div className="flex py-5 gap-x-4">
          <div className="flex-shrink-0">
            <img
              src={product.imgUrl}
              style={{ aspectRatio: "3/4" }}
              className="h-20 rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="font-bold">{product.name}</div>
            <div className="text-xs text-gray-500">Variação: {product.variation_name}</div>
            <div>
              <span className="font-bold">
                {Number(product.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <div>
                Quantidade: <span>{product.quantity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartCard;
