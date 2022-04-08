import React, { useEffect, useReducer } from "react";
import styles from "./Register.module.css";
import { Button } from "../Button/Button";
import { useHttp } from "../../hooks/useHttp";
import { registerUser } from "../../helpers/registerUser";
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
  const { sendRequest, data, error, status } = useHttp(() =>
    registerUser(registerInputState)
  );
  const submitHandler = (e) => {
    e.preventDefault();
    if (registerInputState.password1.length < 8) {
      //Handle Error here.
    }
    if (registerInputState.password1 !== registerInputState.password2) {
      //Handle Error state here
    } else {
      sendRequest();
    }
  };
  useEffect(() => {
    if(status==="completed"){
      toggleOption();
    }
  },[status, toggleOption])
  if (status === "pending") {
    return (
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_gqn2n5rs.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></lottie-player>
    );
  }
  if (status === "error") {
    return (
      <div className={styles["login-box"]}>
        {/*Toast here */}
        <h1>{error}</h1>
        <Button onClick={() => props.toggleOption()}>Register</Button>
      </div>
    );
  }
  return (
    <div className={styles["login-box"]}>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className={styles["login-form"]}>
          <div className={styles["login-header"]}>
            <p>Register</p>
          </div>
          <div className={styles["login-input"]}>
            <div className={styles["input-control"]}>
              <label for="">Email Address</label>
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
              <label for="">Password</label>
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
              <label for="">Confirm Password</label>
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
    </div>
  );
};
