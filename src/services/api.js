import axios from "axios"

export const api = axios.create({
  baseURL: "https://food-explorer-kroz.onrender.com/",
  withCredentials: true,
})