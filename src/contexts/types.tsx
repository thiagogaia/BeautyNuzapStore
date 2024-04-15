import { ReactNode } from "react";

export interface IProviderProps {
  children: ReactNode;
}

export interface IProductsProviderData {
  load: boolean;
  productList: IProductData[];
  setStoreUri: (e: string) => void;
}

export interface IProductData {
  id: string;
  variation_item_id: string;
  id_store: string;
  uri: string;
  code: string;
  uniqid: string;
  ean: string;
  name: string;
  price: string;
  price_promo: null;
  image: string;
  category: string;
  category_id: string;
  description_small: string;
  description: string;
  active: string;
  variation: string;
  stock: string;
  idItem: string;
  variation_item_name: string;
  external_link: null;
  variations: string;
  variation_id: null;
  variation_name: null;
  variations_items: string;
  removeProd: string;
  stockProd: string;
  promo_start: null;
  promo_end: null;
  imgUrl: string;
  gallery: IProductGalleryItem[];
  variation_data: IProductVariationData[];
}

export interface IProductGalleryItem {
  id: string;
  id_store_product: string;
  file: string;
  subtitle: null;
  imgUrl: string;
}

export interface IProductVariationData {
  id: string;
  type: string;
  name: string;
  image: string;
  image_thumb: string;
  active: string;
  imgUrl: string;
  imgThumbUrl: string;
  item: IProductVariationItem[];
  id_product: string;
}

export interface IProductVariationItem {
  id: string;
  variation_item_id: string;
  id_variation: string;
  variation_id: string;
  variation_name: string;
  variation_item_name: string;
  description: string;
  price: string;
  price_promo: null;
  active: string;
  stock: string;
  sciId: null;
  totalSepareted: null;
  qty: string;
  date_expire: null;
  imgUrl: string;
  name: string;
  id_store: string;
  code: string;
  ean: string;
  image: string;
  category: string;
  category_id: string;
  description_small: string;
  variation: string;
}
