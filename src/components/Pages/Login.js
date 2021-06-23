import { React, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import classes from "./Login.module.css";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import fetchUser from "../store/user-actions";

const Login = () => {
  //   const dispatch = useDispatch();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isValidCredentials, setIsValidCredentials] = useState(true);
  const history = useHistory();
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // Add user auth variable to the local storage
    console.log("inside");
    // history.push("/dashboard");
    if (userCredentials) {
      var auth = {};
      auth = {
        isAuth: true,
      };
      if (
        userCredentials[0].email === inputEmail &&
        userCredentials[0].password === inputPassword
      ) {
        setIsValidCredentials(true);
        if (userCredentials.length < 2) {
          userCredentials.push(auth);
          localStorage.setItem(
            "userCredentials",
            JSON.stringify(userCredentials)
          );
        } else {
          userCredentials[1] = auth;
          localStorage.setItem(
            "userCredentials",
            JSON.stringify(userCredentials)
          );
        }
        // console.log(window);

        history.push("/dashboard");
        // window.location.href = "http://localhost:3000/dashboard";
      } else {
        setIsValidCredentials(false);
      }
    }
  };

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);
  };

  return (
    <Container>
      <Card className={classes.card}>
        <Card.Body>
          <Card.Title>Sign In</Card.Title>
          {!isValidCredentials && (
            <Alert className={classes.alertMessage} variant={"danger"}>
              Invalid username or password
            </Alert>
          )}
          {!userCredentials && (
            <Alert className={classes.alertMessage} variant={"danger"}>
              No register user available
            </Alert>
          )}
          <Form onSubmit={formSubmitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={inputEmail}
                onChange={emailChangeHandler}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={inputPassword}
                onChange={passwordChangeHandler}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
