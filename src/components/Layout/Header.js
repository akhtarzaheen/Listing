import React, { Fragment, useState, useEffect } from "react";
import classes from "./Header.module.css";
import { Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "../store/user-slice";

const Header = () => {
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  const [showLoginBtn, setShowLoginBtn] = useState(false);
  const [showRegisterBtn, setRegisterBtn] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // console.log(user);
  // console.log(user.loggedIn);
  // console.log(user);
  // let isAuthentication = "";
  console.log(user);
  console.log(userCredentials);
  const location = window.location.href;
  // if (userCredentials && userCredentials.length > 1) {
  //   isAuthentication = userCredentials[1].isAuth;
  // }
  const locationRegisterPage = location.includes("/register");
  const locationLoginPage = location.includes("/login");
  let Auth = "";
  if (user[1]) {
    Auth = user[1].isAuth;
  }
  useEffect(() => {
    if (locationRegisterPage && user && !Auth) {
      setShowLoginBtn(true);
    }
    if (Auth) {
      setShowLoginBtn(false);
    }
  }, [locationRegisterPage, Auth, user]);

  useEffect(() => {
    if (locationLoginPage && user && !Auth) {
      setRegisterBtn(true);
    }
    if (Auth) {
      setRegisterBtn(false);
    }
  }, [locationLoginPage, Auth, user]);

  // if (location.includes("/login")) {
  //   setRegisterBtn(true);
  // }

  const logoutOnClickHandler = () => {
    // var isAuth = userCredentials[1].isAuth;
    // if (isAuthentication === true) {
    const auth = {
      isAuth: false,
    };
    // isAuthentication = false;
    userCredentials[1] = auth;
    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
    dispatch(userSliceActions.logout());
    history.push("/login");
    // }
    console.log(JSON.parse(localStorage.getItem("userCredentials")));
  };

  console.log(locationRegisterPage);
  const showRegHandle = () => {
    setRegisterBtn(true);
    setShowLoginBtn(false);
  };

  const showLoginHandler = () => {
    setRegisterBtn(false);
    setShowLoginBtn(true);
  };

  console.log("showLoginBtn:", showLoginBtn);
  console.log("showRegisterBtn", showRegisterBtn);

  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.headerText}>Locad_Todo</h1>
        {user && Auth && (
          <Button variant="light" onClick={logoutOnClickHandler}>
            Logout
          </Button>
        )}
        {showRegisterBtn && (
          <Button variant="light" onClick={showLoginHandler}>
            <NavLink to="/register" className={classes.linkBtnHome}>
              Register
            </NavLink>
          </Button>
        )}
        {showLoginBtn && (
          <Button variant="light" onClick={showRegHandle}>
            <NavLink to="/login" className={classes.linkBtnHome}>
              Login
            </NavLink>
          </Button>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
