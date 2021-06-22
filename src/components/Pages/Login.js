import { React, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import classes from "./Login.module.css";

const Login = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
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
