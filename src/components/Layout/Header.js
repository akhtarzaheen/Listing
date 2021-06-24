import React, { Fragment, useState, useEffect } from "react";
import classes from "./Header.module.css";
import { Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "../store/user-slice";

const Header = () => {
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  const [showLoginBtn, setShowLoginBtn] = useState("");
  const [showRegisterBtn, setRegisterBtn] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  // fetching user data
  const { user } = useSelector((state) => state.user);

  const location = window.location.href;
  const locationRegisterPage = location.includes("/register");
  const locationLoginPage = location.includes("/login");
  let Auth = "";
  if (user[1]) {
    Auth = user[1].isAuth;
  }
  useEffect(() => {
    // show login button if user is not authenticated
    if (locationRegisterPage && user && !Auth) {
      setShowLoginBtn(true);
    }
    // hide login button if user is authenticated
    if (Auth) {
      setShowLoginBtn(false);
    }
  }, [locationRegisterPage, Auth, user]);

  useEffect(() => {
    // show register button if user is not authenticated
    if (locationLoginPage && user && !Auth) {
      setRegisterBtn(true);
    }
    // hide register button if user is authenticated
    if (Auth) {
      setRegisterBtn(false);
    }
  }, [locationLoginPage, Auth, user]);

  const logoutOnClickHandler = () => {
    const auth = {
      isAuth: false,
    };
    userCredentials[1] = auth;
    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
    dispatch(userSliceActions.logout());
    history.push("/login");
  };

  const showRegHandle = () => {
    setRegisterBtn(true);
    setShowLoginBtn(false);
  };

  const showLoginHandler = () => {
    setRegisterBtn(false);
    setShowLoginBtn(true);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.headerText}>Locad_Products</h1>
        {user && Auth && (
          <Button variant="light" onClick={logoutOnClickHandler}>
            Logout
          </Button>
        )}
        {showRegisterBtn && (
          <NavLink to="/register" className={classes.linkBtnHome}>
            <Button variant="light" onClick={showLoginHandler}>
              Register
            </Button>
          </NavLink>
        )}

        {showLoginBtn && (
          <NavLink to="/login" className={classes.linkBtnHome}>
            <Button variant="light" onClick={showRegHandle}>
              Login
            </Button>
          </NavLink>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
