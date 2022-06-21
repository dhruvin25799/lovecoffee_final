import axios from "axios";
export const registerUser = async (registerInputState) => {
  const userData = {
    email: registerInputState.email,
    password: registerInputState.password1,
  };
  const response = await axios.post(
    "/register",
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
    }
    return data;
  }
};
