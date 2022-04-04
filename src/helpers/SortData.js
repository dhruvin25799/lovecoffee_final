export const SortData = (data, sort) => {
  if (sort && sort === "ASC") {
    return data.sort((a, b) => a["price"] - b["price"]);
  }
  if (sort && sort === "DESC") {
    return data.sort((a, b) => b["price"] - a["price"]);
  }
  return data;
};
