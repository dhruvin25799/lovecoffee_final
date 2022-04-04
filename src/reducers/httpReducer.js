export const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND": {
      return { ...state, status: "pending" };
    }
    case "SUCCESS": {
      return { ...state, data: action.payload, status: "completed" };
    }
    case "ERROR": {
      return { ...state, error: action.payload, status: "error" };
    }
    default:
      return state;
  }
};