import axios from "axios";
export const changeInCart = async (data) => {
  const response = await axios.post(
    "/user/cart/" + data.product._id,
    {
      product: data.product,
      action: data.type,
    },
    {
      headers: {
        Authorization: data.token,
      },
    }
  );
  if (response.status === 500) {
    throw new Error("API is down!");
  } else {
    const data = await response.data;
    if (response.status !== 200) {
      throw new Error(data.error);
    } else {
      return data;
    }
  }
};
