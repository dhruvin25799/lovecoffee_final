import React, { useReducer, useCallback } from "react";
import { httpReducer } from "../reducers/httpReducer";


const httpInitialState = {
  data: null,
  error: null,
  status: null,
};

export const useHttp = (requestFunction) => {
  const [httpState, httpDispatch] = useReducer(httpReducer, httpInitialState);
  const sendRequest = useCallback(async() => {
    httpDispatch({ type: "SEND" });
    try {
      const resp = await requestFunction();
      httpDispatch({ type: "SUCCESS", payload: resp });
    } catch (error) {
      httpDispatch({
        type: "ERROR",
        payload: error.message || "Something went wrong!",
      });
    }
  }, [requestFunction]);

  return { sendRequest, ...httpState };
};
