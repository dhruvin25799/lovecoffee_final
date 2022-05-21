export const registerUser = async (registerInputState) => {
  const userData = {
    email: registerInputState.email,
    password: registerInputState.password1,
  };
  const response = await fetch("/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (response.status === 500) {
    throw new Error("API is down!");
  } else {
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.error);
    }
    return data;
  }
};
