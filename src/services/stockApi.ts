import axios from "axios";
import { StockSearchRs } from "../models/StockSearchItem";

const BASE_URL = "https://api.polygon.io/v3/reference/tickers?active=true&limit=100&apiKey="; // Replace with real API endpoint
const API_KEY = import.meta.env.VITE_POLYGON_API_KEY;

export const fetchStocks = async (page: number, search: string = "") => {
  try {
    const response = await axios.get<StockSearchRs>(`${BASE_URL}${API_KEY}`, {
      params: { page, search },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
        throw new Error("Too many requests. Please try again later.");
      }
      if (error.response?.status === 401) {
        throw new Error("Invalid API key. Please check your credentials.");
      }
      throw new Error(error.response?.data?.message || "Failed to fetch stocks data");
    }
    throw new Error("An unexpected error occurred");
  }

};