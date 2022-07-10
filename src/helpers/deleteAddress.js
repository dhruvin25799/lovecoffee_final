import axios from "axios";
export const deleteAddress = async (data) => {
  const response = await axios.delete("/user/address/delete/" + data.addressId, {
    headers: {
      Authorization: data.token,
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
