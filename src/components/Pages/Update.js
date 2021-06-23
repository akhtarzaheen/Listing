import { Fragment, useState, useEffect } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import classes from "./Update.module.css";
import { updateProduct } from "../store/products-actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import fetchUser from "../store/user-actions";

const Update = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const id = param.id;

  const products = useSelector((state) => state.products.products);
  console.log(products);
  const selectedProduct = products.find(
    (product) => product.id.toString() === id.toString()
  );
  var selectedTitle = "";
  var selectedDiscription = "";
  if (selectedProduct) {
    selectedTitle = selectedProduct.title;
    selectedDiscription = selectedProduct.description;
  }
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  const [enteredProductTitle, setEnteredProductTitle] = useState(selectedTitle);

  const [enteredProductDescription, setEnteredProductDescription] =
    useState(selectedDiscription);
  const [isItemExist, setIsItemExist] = useState(false);

  const onSubmitHandler = (event) => {
    // update data
    event.preventDefault();
    const updatedProductObject = {
      title: enteredProductTitle,
      description: enteredProductDescription,
      id: id,
    };
    if (
      enteredProductTitle === selectedProduct.title &&
      enteredProductDescription === selectedProduct.description
    ) {
      setIsItemExist(true);
    } else {
      dispatch(updateProduct(updatedProductObject, id));
      setIsItemExist(false);
      history.push("/dashboard");
    }
  };

  const onProductTitleChangeHandler = (event) => {
    setEnteredProductTitle(event.target.value);
  };

  const onProductDescriptionChangeHandler = (event) => {
    setEnteredProductDescription(event.target.value);
  };

  const backBtnHandler = () => {
    history.goBack();
  };

  return (
    <Fragment>
      <Container className="container">
        <Card className={classes.card}>
          {isItemExist && (
            <Alert className={classes.alertMessage} variant={"danger"}>
              Product already exist
            </Alert>
          )}
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

        <Button
          className={classes.backBtn}
          variant="success"
          onClick={backBtnHandler}
        >
          Back
        </Button>
      </Container>
    </Fragment>
  );
};

export default Update;
