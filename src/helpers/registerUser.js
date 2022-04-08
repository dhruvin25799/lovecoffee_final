export const registerUser = async (registerInputState) => {
  const userData = {
    email: registerInputState.email,
    password: registerInputState.password1,
  };
  const response = await fetch("/register", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData),
  });
  if(response.status!==200){
      if(response.status===403){
        throw new Error("User already exists");
      } else {
        throw new Error("Could not register user!");
      }
  }
  return "";
};
