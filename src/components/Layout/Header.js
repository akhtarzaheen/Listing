import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  let isAuth = "";
  console.log(userCredentials);
  if (userCredentials) {
    isAuth = userCredentials[1].isAuth;
  }
  const logoutOnClickHandler = () => {
    // var isAuth = userCredentials[1].isAuth;
    if (isAuth === true) {
      // const auth = {
      //   isAuth: false,
      // };
      // userCredentials.push(auth);
      // localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
      isAuth = false;
    }
    console.log(JSON.parse(localStorage.getItem("userCredentials")));
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.headerText}>Locad_Todo</h1>
        {isAuth && userCredentials && (
          <Button variant="light" onClick={logoutOnClickHandler}>
            Logout
          </Button>
        )}
        {(!userCredentials || !isAuth) && (
          <Button variant="light">
            <NavLink to="/Register" className={classes.linkBtnHome}>
              Register
            </NavLink>
          </Button>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
