import axios from "axios";
export const getCartData = async (token) => {
  const response = await axios.get("/user/cart", {
    headers: {
      Authorization: token,
    },
  });
  if (response.status === 500) {
    throw new Error("API is down!");
  } else {
    const data = response.data;
    if (response.status !== 200) {
      throw new Error(data.error);
    } else {
      return data;
    }
  }
};
