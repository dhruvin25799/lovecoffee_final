export const getWishlistData = async (token) => {
  const response = await fetch("/user/wishlist", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 500) {
    throw new Error("API is down!");
  } else {
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.error);
    } else {
      return data;
    }
  }
};
