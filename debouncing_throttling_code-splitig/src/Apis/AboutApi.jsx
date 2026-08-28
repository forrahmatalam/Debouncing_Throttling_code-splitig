import axios from "axios";

export const getUsers = async () => {
  const res = await axios.get("https://fakestoreapi.com/users");

  return res.data;
};