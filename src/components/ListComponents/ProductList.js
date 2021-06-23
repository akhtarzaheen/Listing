import { Card, Col, Row } from "react-bootstrap";
import classes from "./TodoList.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProduct } from "../store/products-actions";

const ProductList = (props) => {
  const updateLink = "/update/" + props.id;
  const dispatch = useDispatch();
  const deleteBtnHandler = () => {
    // remove product from Array for selected id
    dispatch(removeProduct(props.id));
  };
  return (
    <li>
      <Card className={classes.card}>
        <Row>
          <Col>
            <h5>Title</h5>
            {props.title}
          </Col>
          <Col>
            <h5>Description</h5>
            {props.description}
          </Col>
          <Col>
            <Row>
              <Col>
                <Link to={updateLink}>
                  <EditIcon />
                </Link>
              </Col>
              <Col>
                <Link onClick={deleteBtnHandler}>
                  <DeleteIcon />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </li>
  );
};

export default ProductList;
