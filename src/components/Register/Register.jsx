import React, { useEffect, useReducer } from "react";
import styles from "./Register.module.css";
import { Button } from "../Button/Button";
import { useHttp } from "../../hooks/useHttp";
import { registerUser } from "../../helpers/registerUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  registerInputReducer,
  initialRegisterInputState,
} from "../../reducers/InputReducers";

export const Register = (props) => {
  const {toggleOption} = props;
  const [registerInputState, registerInputDispatch] = useReducer(
    registerInputReducer,
    initialRegisterInputState
  );
  const { sendRequest, data, error, status } = useHttp(registerUser);
  const submitHandler = (e) => {
    e.preventDefault();
    if (registerInputState.password1.length < 8) {
      //Handle Error here.
    }
    if (registerInputState.password1 !== registerInputState.password2) {
      //Handle Error state here
    } else {
      sendRequest(registerInputState);
    }
  };
  useEffect(()=>{
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
       toast.success("User registered, please login!", {
         position: "top-right",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         onClose: () => toggleOption(),
       });
     }
  },[status, toggleOption, error]);
  return (
    <div className={styles["login-box"]}>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className={styles["login-form"]}>
          <div className={styles["login-header"]}>
            <p>Register</p>
          </div>
          <div className={styles["login-input"]}>
            <div className={styles["input-control"]}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="xyz@abc.com"
                required
                value={registerInputState.email}
                autoComplete="email"
                onChange={(e) =>
                  registerInputDispatch({
                    type: "EMAIL",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Password</label>
              <input
                type="password"
                required
                value={registerInputState.password1}
                autoComplete="new-password"
                onChange={(e) =>
                  registerInputDispatch({
                    type: "PASSWORD1",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Confirm Password</label>
              <input
                type="password"
                required
                value={registerInputState.password2}
                autoComplete="new-password"
                onChange={(e) =>
                  registerInputDispatch({
                    type: "PASSWORD2",
                    payload: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={styles["login-extra"]}>
            <div className={styles["input-control-row"]}>
              <label>
                <input type="checkbox" required />I accept to all Terms and
                Conditions
              </label>
            </div>
          </div>
          <Button isFull={true}>Register</Button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};
