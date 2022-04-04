export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const ifExists = state.filter((item) => item._id === action.payload._id);
      if (ifExists.length === 1) {
        return state;
      } else {
        return [...state, action.payload];
      }
    }
    case "REMOVE": {
      return state.filter((item) => item._id !== action.payload._id);
    }
    default:
      return state;
  }
};

export const initialWishlistState = [];
