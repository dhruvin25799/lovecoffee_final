import React, { useReducer, useEffect } from "react";
import styles from "../Register/Register.module.css";
import { Button } from "../Button/Button";
import { useHttp } from "../../hooks/useHttp";
import { loginUser } from "../../helpers/loginUser";
import { useAuth } from "../../context/auth-context";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  loginInputReducer,
  initialLoginInputState,
} from "../../reducers/InputReducers";

export const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const { sendRequest, data, error, status } = useHttp(loginUser);
  const [loginInputState, loginInputDispatch] = useReducer(
    loginInputReducer,
    initialLoginInputState
  );
  const submitHandler = (e) => {
    e.preventDefault();
    sendRequest(loginInputState);
  };
  useEffect(() => {
    if (status === "error") {
      toast.error(error, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if (status === "completed") {
      if (data) {
        authDispatch({ type: "LOGIN", payload: data.token });
        toast.success(
          "Logged in successfully! You will be redirected to home page!",
          {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            onClose: () => navigate("/", { replace: true }),
          }
        );
      }
    }
  }, [authDispatch, data, navigate, status]);
  return (
    <div className={styles["login-box"]}>
      <form onSubmit={submitHandler}>
        <div className={styles["login-form"]}>
          <div className={styles["login-header"]}>
            <p>Login</p>
          </div>
          <div className={styles["login-input"]}>
            <div className={styles["input-control"]}>
              <label>Email Address</label>
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
              <label>Password</label>
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
      <ToastContainer />
    </div>
  );
};
