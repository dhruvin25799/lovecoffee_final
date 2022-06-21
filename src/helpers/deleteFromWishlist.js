import axios from "axios";
export const deleteFromWishlist = async (data) => {
  const response = await axios.delete("/user/wishlist/" + data.product._id, {
    headers: {
      Authorization: data.token,
    },
    data: { product: data.product },
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
