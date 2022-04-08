export const loginUser = async (loginInputState) => {
  const userData = {
    email: loginInputState.email,
    password: loginInputState.password,
  };
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (response.status !== 200) {
    if (response.status === 403) {
      throw new Error("User already exists");
    } else {
      throw new Error("Could not register user!");
    }
  }
  return data;
};
