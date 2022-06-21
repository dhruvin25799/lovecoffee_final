export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_STOCK":
      return { ...state, showOutOfStock: !state.showOutOfStock };
    case "SORT":
      return { ...state, sort: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "CLEAR":
      return initialFilterState;
    default:
      return state;
  }
};

export const initialFilterState = {
  showOutOfStock: false,
  sort: null,
  category: false,
  price: "2000",
  rating: "0",
};
