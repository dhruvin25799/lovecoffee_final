import axios from "axios";
export const getAddressData = async (token) => {
  const response = await axios.get("/user/address", {
    headers: {
      Authorization: token,
    },
  });
  if (response.status === 500) {
    throw new Error("API is down!");
  } else {
    const data = response.data;
    if (response.status !== 200) {
      throw new Error(data.error);
    } else {
      return data;
    }
  }
};
