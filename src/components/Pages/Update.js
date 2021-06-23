import { Fragment, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import classes from "./Update.module.css";
import { updateProduct } from "../store/products-actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Update = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const id = param.id;
  const products = useSelector((state) => state.products.products);

  const selectedProduct = products.find(
    (product) => product.id.toString() === id.toString()
  );
  const [enteredProductTitle, setEnteredProductTitle] = useState(
    selectedProduct.title
  );
  const [enteredProductDescription, setEnteredProductDescription] = useState(
    selectedProduct.description
  );

  const onSubmitHandler = (event) => {
    // update data
    event.preventDefault();
    const updatedProductObject = {
      title: enteredProductTitle,
      description: enteredProductDescription,
      id: id,
    };
    dispatch(updateProduct(updatedProductObject, id));
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
            <Form.Group controlId="TaskTitle">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={enteredProductTitle}
                onChange={onProductTitleChangeHandler}
              />
            </Form.Group>

            <Form.Group controlId="TaskDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={enteredProductDescription}
                onChange={onProductDescriptionChangeHandler}
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

export default Update;
