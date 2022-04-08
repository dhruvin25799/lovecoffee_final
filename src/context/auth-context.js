import { createContext, useContext, useReducer } from "react";
import { authReducer, initialAuthState } from "../reducers/authReducer";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
