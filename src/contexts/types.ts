import { ReactNode } from "react";

export interface IProviderProps {
  children: ReactNode;
}

export interface IStoreProviderData {
  load: boolean;
  storeData: IStoreData;
  storeUri: string;
  setStoreUri: (e: string) => void;
  productList: IProductData[];
  productListPromo: IProductData[];
  productListRelease: IProductData[];
}

export interface ICartProviderData {
  cart: ICartProductData[];
  addToCart: (e: IProductData | ICartProductData) => void;
  removeToCart: (e: string) => void;
  excludeProduct: (e: string) => void;
}

export interface ICartProductData {
  id: string;
  name: string;
  price: string;
  image: string;
  imgUrl: string;
  category: string;
  code: string;
  uri: string;
  price_promo: string;
  stock: string;
  variation: string;
  variation_name: string;
  variation_id: string;
  variation_item_id: string;
  discount: number;
  quantity: number;
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
  price_promo: string;
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
  external_link: string;
  variations: string;
  variation_id: string;
  variation_name: string;
  variations_items: string;
  removeProd: string;
  stockProd: string;
  promo_start: string;
  promo_end: string;
  imgUrl: string;
  gallery: IProductGalleryItem[];
  variation_data: IProductVariationData[];
}

export interface IProductGalleryItem {
  id: string;
  id_store_product: string;
  file: string;
  subtitle: string;
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
  price_promo: string;
  active: string;
  stock: string;
  sciId: string;
  totalSepareted: string;
  qty: string;
  date_expire: string;
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

export interface IStoreData {
  store_shopper: unknown;
  business: IStoreBusiness;
  data_view: IStoreDataView;
  store_sellers: IStoreSeller[];
}

export interface IStoreBusiness {
  url: string;
  urlImgLoad: string;
  name: string;
  site: string;
  whatsapp: string;
  whatsapp_ddi: string;
  logo: string;
  social_integrations: IStoreSocialIntegrations;
  social_links: IStoreSocialLinks;
  categories: IStoreCategorie[];
  shipping: IStoreShipping[];
  payments_accept: IStorePaymentAccept[];
  minimum_order: IStoreMinimumOrder;
  block_access: string;
  block_prices: string;
  send_order: string;
  zip: string;
  get_address: string;
  get_cpf_cnpj: string;
  select_seller: string;
  calc_delivery_fee: string;
  control_stock_config: IStoreControlStockCofig;
  block_store: string;
  block_store_config: string;
  slides: IStoreSlide[];
  store_variations: IStoreVariation[];
  store_variation_items: IStoreVariation[];
  store_max_price: number;
  store_min_price: number;
  transparentPay: boolean;
}

export interface IStoreSocialIntegrations {
  facebook_pixel: string;
  google_analytics: string;
  google_tagmanager: string;
  whatsapp_widget: string;
}

export interface IStoreSocialLinks {
  instagram: string;
  facebook: string;
  youtube: string;
  site_blog: string;
}

export interface IStoreShipping {
  code: number;
  slug: string;
  name: string;
}

export interface IStorePaymentAccept {
  code: number;
  name: string;
  symbol: string;
}

export interface IStoreMinimumOrder {
  type: string;
  type_name: string;
  min: string;
}

export interface IStoreControlStockCofig {
  not_negative_stock: string;
  not_display_product: string;
  inactive_product: string;
  display_stock: string;
  separate_stock: string;
}

export interface IStoreSlide {
  id: string;
  link: string;
  image_mobile: string;
  image_tablet: string;
  image_desktop: string;
}

export interface IStoreCategorie {
  id: string;
  name: string;
  uri: string;
  active: string;
  order: string;
}

export interface IStoreVariation {
  id: string;
  name: string;
}

export interface IStoreDataView {
  token: string;
  uuid: string;
}

export interface IStoreSeller {
  id: string;
  name: string;
  phone: string;
  phone_ddi: string;
  first_name: string;
  last_name: string;
}
