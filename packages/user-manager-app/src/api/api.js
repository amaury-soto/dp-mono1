import axios from "axios";

const classApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const getClass = async () => {
  const res = await classApi.get("/classList");
  console.log(res.data)
  return res.data;
};

export default classApi;