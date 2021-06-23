import { React, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import classes from "./Register.module.css";

const Register = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [inputConfirmPassword, setInputConfirmPassword] = useState();
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isReistered, setIsRegistered] = useState(false);
  const [isMailIdExist, setIsMailIdExist] = useState(false);
  const userDetailsArray = [];
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // Add user to the local storage
    if (inputPassword === inputConfirmPassword) {
      setIsPasswordMatch(true);
      const user = {
        email: inputEmail,
        password: inputPassword,
      };
      const isUserExist = JSON.parse(localStorage.getItem("userCredentials"));
      if (isUserExist && isUserExist[0].email === inputEmail) {
        setIsMailIdExist(true);
        setIsRegistered(false);
        return;
      }
      setIsMailIdExist(false);
      userDetailsArray.push(user);
      localStorage.setItem("userCredentials", JSON.stringify(userDetailsArray));
      setIsRegistered(true);
      return;
    }
    setIsPasswordMatch(false);
  };

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setInputConfirmPassword(event.target.value);
  };
  return (
    <Container>
      <Card className={classes.card}>
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
          <br />
          {isMailIdExist && (
            <Alert className={classes.alertMessage} variant={"danger"}>
              Mail id already exist
            </Alert>
          )}
          {isReistered && (
            <Alert className={classes.alertMessage} variant={"success"}>
              Registered successfully
            </Alert>
          )}
          {!isPasswordMatch && (
            <Alert className={classes.alertMessage} variant={"danger"}>
              Password doesn't match
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
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={inputConfirmPassword}
                onChange={confirmPasswordChangeHandler}
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

export default Register;
