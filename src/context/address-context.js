import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./auth-context";
import { useHttp } from "../hooks/useHttp";
import { getAddressData } from "../helpers/getAddressData";
import {
  addressReducer,
  initialAddressState,
} from "../reducers/addressReducer";

const addressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [address, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );
  const { authState } = useAuth();
  const { sendRequest, error, status, data } = useHttp(getAddressData);
  useEffect(() => {
    if (authState.isLoggedIn === false) {
      addressDispatch({ type: "LOGGED_OUT" });
    }
    if (authState.isLoggedIn === true && authState.token !== "") {
      sendRequest(authState.token);
    }
  }, [authState, sendRequest]);
  useEffect(() => {
    if (status === "completed") {
      addressDispatch({ type: "LOAD_DATA", payload: data });
    }
  }, [status, data]);
  return (
    <addressContext.Provider value={{ address, addressDispatch }}>
      {children}
    </addressContext.Provider>
  );
};

export const useAddress = () => useContext(addressContext);
