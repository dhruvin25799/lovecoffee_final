export const addressReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA": {
      return [...action.payload];
    }
    case "LOGGED_OUT": {
      return initialAddressState;
    }
    default:
      return state;
  }
};

export const initialAddressState = [];
