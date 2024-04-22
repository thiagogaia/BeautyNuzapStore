import axios, { AxiosInstance } from "axios";
import { getCookies } from "./cookies";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { getParams } from "./getParams";

const BASE_URL = import.meta.env.VITE_API_URL

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {   
    "Content-Type": "application/json", 
    "Cookies": JSON.stringify(getCookies()),
    "GetParams": getParams(),
    "Location": window.location.href,
    "Referrer": document.referrer
  }
});

const getStoredVisitorId = (): string | null => {
  return window.localStorage.getItem("userFingerPrint");
};

const storeVisitorId = (visitorId: string): void => {
  window.localStorage.setItem("userFingerPrint", visitorId);
};

api.interceptors.request.use(async (config) => {
  let visitorId: string | null = getStoredVisitorId();
  if (!visitorId) {
    const fp = await FingerprintJS.load({monitoring: false});
    const fingerprint = await fp.get();
    visitorId = fingerprint.visitorId;
    storeVisitorId(visitorId);
  }  
  config.headers['Fingerprint'] = visitorId;
  return config;
}, (error) => {
  return Promise.reject(error);
});

export { api }