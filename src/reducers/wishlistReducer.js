export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      // const ifExists = state.filter((item) => item._id === action.payload._id);
      // if (ifExists.length === 1) {
      //   return state;
      // } else {
      //   return [...state, action.payload];
      // }
      return [...action.payload];
    }
    case "REMOVE": {
      //return state.filter((item) => item._id !== action.payload._id);
      return [...action.payload];
    }
    case "LOAD_DATA": {
      return [...action.payload];
    }
    case "LOGGED_OUT": {
      return initialWishlistState;
    }
    default:
      return state;
  }
};

export const initialWishlistState = [];
