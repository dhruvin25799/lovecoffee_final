import styles from "./AddressCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const AddressCard = (props) => {
  const { address, onDelete } = props;
  return (
    <>
      <div className={styles["address-card"]}>
        <div className={styles["card-header"]}>
          <h3>{address.name}</h3>
          <div className={styles["card-cta"]}>
            {onDelete && (
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => onDelete(address._id)}
              />
            )}
          </div>
        </div>
        <div className={styles["card-body"]}>
          <p>{address.house}</p>
          <p>{address.street}</p>
          <p>
            {address.city}, {address.state}
          </p>
          <p>{address.pin}</p>
          <p>+91 {address.contact}</p>
        </div>
      </div>
    </>
  );
};
