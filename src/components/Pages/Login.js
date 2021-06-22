import { React, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [isValidCredentials, setIsValidCredentials] = useState(true);
  let history = useHistory();
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userCredentials) {
      console.log(userCredentials);
      console.log(inputEmail);
      console.log(inputPassword);
      var auth = {};
      if (
        userCredentials[0].email === inputEmail &&
        userCredentials[0].password === inputPassword
      ) {
        setIsValidCredentials(true);
        console.log("if user is admin");
        if (userCredentials.length < 2) {
          userCredentials.push(auth);
          console.log("if userCredentials greater less then 2");
          localStorage.setItem(
            "userCredentials",
            JSON.stringify(userCredentials)
          );
        } else {
          console.log("if userCredentials greater greater than 1");
          auth = {
            isAuth: true,
          };
          console.log(userCredentials[1]);
          userCredentials[1] = auth;
          localStorage.setItem(
            "userCredentials",
            JSON.stringify(userCredentials)
          );
        }
        console.log(JSON.parse(localStorage.getItem("userCredentials")));
        history.push("/dashboard");
        console.log("redirect to dashboard");
        return;
      }
      setIsValidCredentials(false);
    }
  };

  const emailChangeHandler = (event) => {
    console.log(event.target.value);
    setInputEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    console.log(event.target.value);
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
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={inputPassword}
                onChange={passwordChangeHandler}
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
