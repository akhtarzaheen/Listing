import { Fragment, useEffect } from "react";
import classes from "./Dashboard.module.css";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetchTasks from "../store/task-actions";
import { useSelector } from "react-redux";
import TodoList from "../ListComponents/TodoList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.task);
  //   console.log(tasks);
  //   const newTasks = { task };
  //   const tasks = newTasks.task;
  console.log(tasks);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Fragment>
      <Container className="container">
        <Row className={classes.taskBtnRow}>
          <Col>
            <Link to="/create" className={classes.linkBtnTask}>
              <Button variant="primary" className={classes.addTaskBtn}>
                Add Task
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className={classes.unOrderedList}>
              {!tasks && (
                <li>
                  <Card>
                    <Row>
                      <Col>No Tasks Available</Col>
                    </Row>
                  </Card>
                </li>
              )}
              {tasks &&
                tasks.map((task) => {
                  return (
                    <TodoList
                      title={task.title}
                      description={task.description}
                      id={task.id}
                      key={task.id}
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
