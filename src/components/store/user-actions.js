import { userSliceActions } from "./user-slice";

const fetchUser = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("userCredentials"));
    if (user) {
      // dispatch action login user
      dispatch(userSliceActions.login(user));
    }
    return user;
  };
};

export default fetchUser;
