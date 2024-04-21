import axios from "axios";
import { getCookies } from "./cookies";
// @ts-ignore
import Fingerprint2 from "fingerprintjs2sync";


const fprint = (new Fingerprint2()).getSync().fprint;
const BASE_URL = import.meta.env.VITE_API_URL

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {   
    "Content-Type": "application/json", 
    "Fingerprint": fprint,
    "Cookies": JSON.stringify(getCookies())
  }
});
