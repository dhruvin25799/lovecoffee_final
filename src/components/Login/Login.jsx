import React, { useEffect, useReducer } from "react";
import styles from "../Register/Register.module.css";
import { Button } from "../Button/Button";
import { useHttp } from "../../hooks/useHttp";
import { loginUser } from "../../helpers/loginUser";
import { useAuth } from "../../context/auth-context";
import {
  loginInputReducer,
  initialLoginInputState,
} from "../../reducers/InputReducers";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [loginInputState, loginInputDispatch] = useReducer(
    loginInputReducer,
    initialLoginInputState
  );
  const { sendRequest, data, error, status } = useHttp(() =>
    loginUser(loginInputState)
  );
  const submitHandler = (e) => {
    e.preventDefault();
    sendRequest();
  };
  useEffect(() => {
    if (status === "completed")
      if (data) {
        authDispatch({ type: "LOGIN", payload: data.token });
        navigate("/", { replace: true });
      }
  }, [navigate, status, authDispatch, data]);
  if (status === "completed") {
    //authDispatch({type: "LOGIN", payload: data.token});
    /* Handle Errro fix this */
    return (
      <div className={styles["login-box"]}>
        <h1>Login Successful.</h1>
      </div>
    );
  }
  return (
    <div className={styles["login-box"]}>
      <form onSubmit={submitHandler}>
        <div className={styles["login-form"]}>
          <div className={styles["login-header"]}>
            <p>Login</p>
          </div>
          <div className={styles["login-input"]}>
            <div className={styles["input-control"]}>
              <label for="">Email Address</label>
              <input
                type="email"
                placeholder="xyz@abc.com"
                required
                value={loginInputState.email}
                autoComplete="email"
                onChange={(e) =>
                  loginInputDispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label for="">Password</label>
              <input
                type="password"
                required
                value={loginInputState.password}
                autoComplete="current-password"
                onChange={(e) =>
                  loginInputDispatch({
                    type: "PASSWORD",
                    payload: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={styles["login-extra"]}>
            <div className={styles["input-control-row"]}>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
          </div>
          <Button isFull={true}>Login</Button>
        </div>
      </form>
    </div>
  );
};
