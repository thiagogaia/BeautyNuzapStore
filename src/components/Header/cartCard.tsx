const CartCard = () => {
  return (
    <li>
      <div>
        <div className="flex py-5 gap-x-4">
          <div className="flex-shrink-0">
            <img
              src="https://thumb.braavo.me/vivadress/200/1596482158.webp"
              style={{ aspectRatio: "3/4" }}
              className="h-20 rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="font-bold">Vestido Longo Acetinado Verde Bandeira</div>
            <div className="text-xs text-gray-500">Tamanho: 38</div>
            <div>
              <span className="font-bold">
                R$ <span>279,90</span>
              </span>
              <div>
                Quantidade: <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartCard;
