import axios from "axios";

export const client = axios.create({
  baseURL: "https://daily-routine-api.herokuapp.com",
  timeout: 20000
});