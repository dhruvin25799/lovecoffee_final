import axios from "axios";
export const addToCart = async (data) => {
  const response = await axios.post(
    "/user/cart/" + data.product._id,
    { product: data.product },
    {
      headers: {
        Authorization: data.token,
      },
    }
  );
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
