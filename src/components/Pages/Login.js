import { React, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import classes from "./Login.module.css";

const Login = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(localStorage.getItem("userCredentials"));
    if (userCredentials) {
      //   const userCredentials = JSON.parse(
      //     localStorage.getItem("userCredentials")
      //   );
      // console.log(userCredentials[0]);
      console.log(userCredentials);
      if (userCredentials) {
        if (
          userCredentials[0].email === inputEmail &&
          userCredentials[0].password === inputPassword
        ) {
          console.log("if user is admin");
          const auth = {
            isAuth: true,
          };
          userCredentials.push(auth);
          localStorage.setItem(
            "userCredentials",
            JSON.stringify(userCredentials)
          );
          console.log(JSON.parse(localStorage.getItem("userCredentials")));
        }
      }
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
