export const registerInputReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL": {
      return { ...state, email: action.payload };
    }
    case "PASSWORD1": {
      return { ...state, password1: action.payload };
    }
    case "PASSWORD2": {
      return { ...state, password2: action.payload };
    }
    default:
      return state;
  }
};

export const initialRegisterInputState = {
  email: "",
  password1: "",
  password2: "",
};

export const loginInputReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL": {
      return { ...state, email: action.payload };
    }
    case "PASSWORD": {
      return { ...state, password: action.payload };
    }
    default:
      return state;
  }
};

export const initialLoginInputState = {
  email: "",
  password: "",
};
