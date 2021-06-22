import { Card, Col, Row } from "react-bootstrap";
import classes from "./TodoList.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const TodoList = (props) => {
  const updateLink = "/update/" + props.id;
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
            <Link to={updateLink}>
              <EditIcon />
            </Link>
            <DeleteIcon />
          </Col>
        </Row>
      </Card>
    </li>
  );
};

export default TodoList;
