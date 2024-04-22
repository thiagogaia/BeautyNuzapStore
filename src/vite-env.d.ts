/// <reference types="vite/client" />
declare module "react-currency-masked-input";

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
