export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      // const ifExists = state.cart.filter(
      //   (item) => action.payload._id === item._id
      // );
      // const finalPrice =
      //   +action.payload.price -
      //   (+action.payload.price * +action.payload.discount) / 100;
      // if (ifExists.length === 0) {
      //   return {
      //     ...state,
      //     shippingCharges: "499",
      //     totalAmount: +state.totalAmount + finalPrice,
      //     totalItems: +state.totalItems + 1,
      //     cart: [...state.cart, { ...action.payload, quantity: 1 }],
      //   };
      // } else {
      //   return {
      //     ...state,
      //     totalAmount: +state.totalAmount + finalPrice,
      //     totalItems: +state.totalItems + 1,
      //     shippingCharges: "499",
      //     cart: state.cart.map((item) =>
      //       item._id === ifExists[0]._id
      //         ? { ...item, quantity: item.quantity + 1 }
      //         : item
      //     ),
      //   };
      // }
      return {...action.payload};
    }
    case "REMOVE": {
      // const ifOnlyOne = state.cart.filter(
      //   (item) => item._id === action.payload._id && +item.quantity === 1
      // );
      // const finalPrice =
      //   +action.payload.price -
      //   (+action.payload.price * +action.payload.discount) / 100;
      // if (state.totalItems === 1) {
      //   return cartInitialState;
      // }
      // if (ifOnlyOne.length !== 0) {
      //   return {
      //     ...state,
      //     totalAmount: +state.totalAmount - finalPrice,
      //     totalItems: +state.totalItems - 1,
      //     cart: state.cart.filter((item) => item._id !== action.payload._id),
      //   };
      // } else {
      //   return {
      //     ...state,
      //     totalAmount: +state.totalAmount - finalPrice,
      //     totalItems: +state.totalItems - 1,
      //     cart: state.cart.map((item) =>
      //       item._id === action.payload._id
      //         ? { ...item, quantity: item.quantity - 1 }
      //         : item
      //     ),
      //   };
      // }
      return {...action.payload};
    }
    case "CHANGE_QUANTITY": {
      return {...action.payload}
    }
    case "DELETE": {
      const finalPrice =
        +action.payload.price -
        (+action.payload.price * +action.payload.discount) / 100;
      const selectedItem = state.cart.find(
        (item) => item._id === action.payload._id
      );
      const selectedItemQuantity = selectedItem.quantity;
      if (state.cart.length === 1) {
        return cartInitialState;
      }
      return {
        ...state,
        totalAmount: state.totalAmount - finalPrice * selectedItemQuantity,
        totalItems: state.totalItems - selectedItemQuantity,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };
    }
    case "LOAD_DATA": {
      return { ...action.payload };
    }
    case "LOGGED_OUT": {
      return cartInitialState;
    }
    default:
      return state;
  }
};

export const cartInitialState = {
  cart: [],
  totalAmount: "0",
  totalItems: "0",
  shippingCharges: "0",
};
