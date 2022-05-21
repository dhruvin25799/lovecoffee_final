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
  if(response.status===500){
    throw new Error("API is down!");
  } else {
    const data = await response.json();
    if (response.status !== 200) {
        throw new Error(data.error);
    } else {
          return data;
    }
  }
};
