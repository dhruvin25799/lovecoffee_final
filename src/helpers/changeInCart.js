export const changeInCart = async (data) => {
  const response = await fetch("/user/cart/" + data.product._id, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: data.token,
    },
    body: JSON.stringify({ product: data.product, action: data.type }),
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
