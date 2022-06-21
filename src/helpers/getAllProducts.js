import axios from "axios";
export const getAllProducts = async () => {
  const response = await axios.get("/products", {}, {});
  const data = response.data;
  if (response.status!==200) {
    throw new Error(data.message || "Could not fetch products");
  }
  return data;
};
