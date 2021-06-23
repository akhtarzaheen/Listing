import { Fragment, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import classes from "./Create.module.css";

const Create = () => {
  const history = useHistory();
  const [enteredProductTitle, setEnteredProductTitle] = useState();
  const [enteredProductDescription, setEnteredProductDescription] = useState();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Add new product to Array
    const products = JSON.parse(localStorage.getItem("products"));
    const productObject = {
      title: enteredProductTitle,
      description: enteredProductDescription,
      id: new Date().getUTCMilliseconds(),
    };
    if (products && products.length > 0) {
      products.push(productObject);
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      const productArray = [];

      productArray.push(productObject);
      localStorage.setItem("products", JSON.stringify(productArray));
    }
    history.push("/dashboard");
  };

  const onProductTitleChangeHandler = (event) => {
    setEnteredProductTitle(event.target.value);
  };

  const onProductDescriptionChangeHandler = (event) => {
    setEnteredProductDescription(event.target.value);
  };

  return (
    <Fragment>
      <Container className="container">
        <Card className={classes.card}>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="ProductTitle">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product"
                value={enteredProductTitle}
                onChange={onProductTitleChangeHandler}
                required
              />
            </Form.Group>

            <Form.Group controlId="ProductDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={enteredProductDescription}
                onChange={onProductDescriptionChangeHandler}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Create;
