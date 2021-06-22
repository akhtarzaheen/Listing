import { React, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
// import { useHistory } from "react-router";
import classes from "./Register.module.css";

const Register = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [inputConfirmPassword, setInputConfirmPassword] = useState();
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isReistered, setIsRegistered] = useState(false);
  const [isMailIdExist, setIsMailIdExist] = useState(false);
  //   const history = useHistory();
  const userDetailsArray = [];
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputPassword === inputConfirmPassword) {
      console.log("Password Match");
      setIsPasswordMatch(true);
      const user = {
        email: inputEmail,
        password: inputPassword,
      };
      //   userDetailsArray.push(inputEmail);
      const isUserExist = JSON.parse(localStorage.getItem("userCredentials"));
      console.log(isUserExist);
      if (isUserExist && isUserExist[0].email === inputEmail) {
        setIsMailIdExist(true);
        setIsRegistered(false);
        return;
      }
      setIsMailIdExist(false);
      console.log(isMailIdExist);
      userDetailsArray.push(user);
      localStorage.setItem("userCredentials", JSON.stringify(userDetailsArray));
      console.log(JSON.parse(localStorage.getItem("userCredentials")));
      setIsRegistered(true);
      //   history.push("/login");
      return;
    }
    console.log("Password does not match");
    setIsPasswordMatch(false);
  };

  const emailChangeHandler = (event) => {
    console.log(event.target.value);
    setInputEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    console.log(event.target.value);
    setInputPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    console.log(event.target.value);
    setInputConfirmPassword(event.target.value);
  };
  //   console.log(isPasswordMatch);
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
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={inputConfirmPassword}
                onChange={confirmPasswordChangeHandler}
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
