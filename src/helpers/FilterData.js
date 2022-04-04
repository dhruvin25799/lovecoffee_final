export const FilterData = (data, filterState) => {
  return data
    .filter((item) => +item.price >= +filterState.price)
    .filter((item) =>
      filterState.category ? filterState.category === item.category : true
    )
    .filter((item) => (filterState.showOutOfStock ? true : item.inStock))
    .filter((item) => +item.rating >= +filterState.rating);
};