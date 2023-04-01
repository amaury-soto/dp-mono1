import axios from "axios";
const classApi = axios.create({
  baseURL: process.env.API_URL,
});

export const getClass = async () => {
  const res = await classApi.get("/classList");
  return res.data;
};

export default classApi;