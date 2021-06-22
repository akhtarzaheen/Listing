import { Fragment, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { taskSliceActions } from "../store/task-slice";
import classes from "./Create.module.css";

const Create = () => {
  const [enteredTaskTitle, setEnteredTaskTitle] = useState();
  const [enteredTaskDescription, setEnteredTaskDescription] = useState();
  //   const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("inside onSubmitHandler");
    // dispatch(
    //   taskSliceActions.addTask({
    //     title: enteredTaskTitle,
    //     description: enteredTaskDescription,
    //   })
    // );
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskObject = {
      title: enteredTaskTitle,
      description: enteredTaskDescription,
      id: new Date().getUTCMilliseconds(),
    };
    if (tasks && tasks.length > 0) {
      console.log("if task already created");
      tasks.push(taskObject);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      const taskArray = [];

      taskArray.push(taskObject);
      localStorage.setItem("tasks", JSON.stringify(taskArray));
    }
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

export default Create;
