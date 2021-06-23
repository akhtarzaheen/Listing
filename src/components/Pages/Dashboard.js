import { Fragment, useEffect } from "react";
import classes from "./Dashboard.module.css";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetchProduct from "../store/products-actions";
import { useSelector } from "react-redux";
import ProductList from "../ListComponents/ProductList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  // fetch updated data after page refresh
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <Container className="container">
        <Row className={classes.productBtnRow}>
          <Col>
            <Link to="/create" className={classes.linkBtnProduct}>
              <Button variant="primary" className={classes.addBtnProduct}>
                Add Product
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className={classes.unOrderedList}>
              {products && products.length === 0 && (
                <li>
                  <Card className={classes.card}>
                    <Row>
                      <Col>No Tasks Found</Col>
                    </Row>
                  </Card>
                </li>
              )}
              {products &&
                products.length > 0 &&
                products.map((product) => {
                  return (
                    <ProductList
                      title={product.title}
                      description={product.description}
                      id={product.id}
                      key={product.id}
                    />
                  );
                })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
