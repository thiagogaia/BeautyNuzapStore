import axios from "axios";

const BASE_URL = "https://nuzap.com.br/";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});
