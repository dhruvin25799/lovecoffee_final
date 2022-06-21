import axios from "axios";
export const loginUser = async (loginInputState) => {
  const userData = {
    email: loginInputState.email,
    password: loginInputState.password,
  };
  const response = await axios.post(
    "/login",
    {
      ...userData,
    },
    {}
  );
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
