import { AddressCard } from "../../components/Card/AddressCard";
import styles from "./Address.module.css";
import { useAddress } from "../../context/address-context";
import { Button } from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "../../hooks/useToggle";
import { useEffect, useReducer } from "react";
import {
  addressReducer,
  initialAddressInputState,
} from "../../reducers/addressInputReducer";
import { addAddress } from "../../helpers/addAddress";
import { deleteAddress } from "../../helpers/deleteAddress";
import { useHttp } from "../../hooks/useHttp";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";

export const Address = () => {
  const { address, addressDispatch } = useAddress();
  const { toggle, toggleOption } = useToggle();
  const { sendRequest, data, error, status } = useHttp(addAddress);
  const {
    sendRequest: deleteRequest,
    data: deleteData,
    error: deleteError,
    status: deleteStatus,
  } = useHttp(deleteAddress);
  const { authState } = useAuth();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    toggleOption();
    sendRequest({ address: addressInputState, token: authState.token });
  };
  const deleteHandler = (addressId) => {
    deleteRequest({ addressId, token: authState.token });
  };
  const [addressInputState, addressInputDispatch] = useReducer(
    addressReducer,
    initialAddressInputState
  );
  useEffect(() => {
    if (status === "completed") {
      addressDispatch({ type: "LOAD_DATA", payload: data });
      toast.success("Address Saved", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if (status === "error") {
      toast.error("Oops! There was some error!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }, [status, addressDispatch, data]);
  useEffect(() => {
    if (deleteStatus === "completed") {
      addressDispatch({ type: "LOAD_DATA", payload: deleteData });
      toast.success("Address Deleted", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if (deleteStatus === "error") {
      toast.error("Oops! There was some error!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }, [deleteStatus, deleteData, addressDispatch]);
  return (
    <>
      <header className={styles["address-heading"]}>
        <div className={styles["banner-text"]}>
          <h1 className={styles["address-text"]}>Delivery Address</h1>
        </div>
      </header>
      <main className={styles["address-main"]}>
        <div className={styles["address-header"]}>
          <p>Your Saved Delivery Addresses</p>
          <Button onClick={toggleOption}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
        {toggle && (
          <form className={styles["login-form"]} onSubmit={formSubmitHandler}>
            <div className={styles["input-control"]}>
              <label>Name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                value={addressInputState.name}
                onChange={(e) =>
                  addressInputDispatch({
                    type: "NAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Address 1</label>
              <input
                type="text"
                placeholder="Enter House/Building"
                required
                value={addressInputState.house}
                onChange={(e) =>
                  addressInputDispatch({
                    type: "HOUSE",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Address 2</label>
              <input
                type="text"
                placeholder="Enter Street/Landmark"
                required
                value={addressInputState.street}
                onChange={(e) =>
                  addressInputDispatch({
                    type: "STREET",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>City</label>
              <input
                type="text"
                placeholder="Enter City"
                required
                value={addressInputState.city}
                onChange={(e) =>
                  addressInputDispatch({
                    type: "CITY",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>State</label>
              <input
                type="text"
                placeholder="Enter State"
                required
                value={addressInputState.state}
                onChange={(e) =>
                  addressInputDispatch({
                    type: "STATE",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Pin Code</label>
              <input
                type="number"
                placeholder="Enter Pincode"
                required
                value={addressInputState.pin}
                onChange={(e) =>
                  addressInputDispatch({ type: "PIN", payload: e.target.value })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Contact Number</label>
              <input
                type="number"
                placeholder="Enter Pincode"
                required
                value={addressInputState.contact}
                onChange={(e) =>
                  addressInputDispatch({
                    type: "CONTACT",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <Button>Submit</Button>
          </form>
        )}
        <hr />
        <div className={styles["address-content"]}>
          {address.length === 0 && <p>No Saved Addresses Found</p>}
          {address.map((item) => (
            <AddressCard
              key={item._id}
              address={item}
              onDelete={deleteHandler}
            />
          ))}
        </div>
      </main>
    </>
  );
};
