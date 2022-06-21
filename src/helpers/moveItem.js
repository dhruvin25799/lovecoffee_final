import axios from "axios";
export const moveItem = async (data) => {
  const response = await axios.post(
    "/user/cart/move/" + data.product._id,
    {
      product: data.product,
      action: data.action,
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
    const data = response.data;
    if (response.status !== 200) {
      throw new Error(data.error);
    } else {
      return data;
    }
  }
};
