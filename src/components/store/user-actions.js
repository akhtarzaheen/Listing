import { userSliceActions } from "./user-slice";

const fetchUser = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("userCredentials"));
    console.log("user", user);
    if (user) {
      dispatch(userSliceActions.login(user));
    }
    return user;
  };
};

export default fetchUser;
