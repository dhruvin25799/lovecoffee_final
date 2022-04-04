export const getAllProducts = async () => {
  const response = await fetch("/products");
  console.log(response);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products");
  }
  return data;
};
