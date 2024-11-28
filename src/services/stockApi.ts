import axios from "axios";
import { StockSearchRs } from "../models/StockSearchItem";

const BASE_URL = "https://api.polygon.io/v3/reference/tickers?active=true&limit=100&apiKey="; // Replace with real API endpoint

export const fetchStocks = async (page: number, search: string = "") => {
  const response = await axios.get<StockSearchRs>(`${BASE_URL}${import.meta.env.VITE_POLYGON_API_KEY}`, {
    params: { page, search },
  });
  return response.data;
};