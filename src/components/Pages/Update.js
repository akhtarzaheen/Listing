import { Fragment, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import classes from "./Update.module.css";
import { updateTasks } from "../store/task-actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Update = () => {
  const param = useParams();
  const dispatch = useDispatch();
  console.log(param);
  const id = param.id;
  const tasks = useSelector((state) => state.task.task);
  //   const newTask = { task };
  //   const newT = { newTask };
  console.log(tasks);
  //   const newTask = task.task;
  const selectedTask = tasks.find(
    (task) => task.id.toString() === id.toString()
  );
  console.log(selectedTask);
  const [enteredTaskTitle, setEnteredTaskTitle] = useState(selectedTask.title);
  const [enteredTaskDescription, setEnteredTaskDescription] = useState(
    selectedTask.description
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const updatedTaskObject = {
      title: enteredTaskTitle,
      description: enteredTaskDescription,
      id: id,
    };
    dispatch(updateTasks(updatedTaskObject, id));
  };

  const onTaskTitleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTaskTitle(event.target.value);
  };

  const onTaskDescriptionChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTaskDescription(event.target.value);
  };
  return (
    <Fragment>
      <Container className="container">
        <Card className={classes.card}>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="TaskTitle">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={enteredTaskTitle}
                onChange={onTaskTitleChangeHandler}
              />
            </Form.Group>

            <Form.Group controlId="TaskDescription">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={enteredTaskDescription}
                onChange={onTaskDescriptionChangeHandler}
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
