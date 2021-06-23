import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Pages/Dashboard";
import Create from "./components/Pages/Create";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import fetchUser from "./components/store/user-actions";
// import { useSelector } from "react-redux";
import Update from "./components/Pages/Update";
function App() {
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);

  let isAuthentication = "";
  // let Auth = "";
  // if (user[1]) {
  //   Auth = user[1].isAuth;
  // }
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch]);
  console.log(userCredentials);
  if (userCredentials && userCredentials.length > 1) {
    isAuthentication = userCredentials[1].isAuth;
  }

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {isAuthentication ? (
            <Redirect to="/dashboard" />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/dashboard">
          {console.log(isAuthentication)}
          {isAuthentication ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/create">
          {isAuthentication ? <Create /> : <Redirect to="/login" />}
        </Route>
        <Route path="/update/:id">
          {isAuthentication ? <Update /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
