export const addressReducer = (state, action) => {
  switch (action.type) {
    case "NAME": {
      return { ...state, name: action.payload };
    }
    case "HOUSE": {
      return { ...state, house: action.payload };
    }
    case "STREET": {
      return { ...state, street: action.payload };
    }
    case "CITY": {
      return { ...state, city: action.payload };
    }
    case "STATE": {
      return { ...state, state: action.payload };
    }
    case "PIN": {
      return { ...state, pin: action.payload };
    }
    case "CONTACT": {
      return { ...state, contact: action.payload };
    }
    default:
      return state;
  }
};

export const initialAddressInputState = {
  name: "",
  house: "",
  street: "",
  city: "",
  state: "",
  pin: "",
  contact: "",
};
