export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, isLoggedIn: true, token: action.payload };
    }
    case "LOGOUT": {
      return initialAuthState;
    }
    default:
      return state;
  }
};

export const initialAuthState = {
  isLoggedIn: false,
  token: "",
};
