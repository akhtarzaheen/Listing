import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Pages/Dashboard";
import Create from "./components/Pages/Create";
import Update from "./components/Pages/Update";
function App() {
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

  let isAuthentication = "";
  if (userCredentials && userCredentials.length > 0) {
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
        <Route path="/dashboard" exact>
          {isAuthentication ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/dashboard/create">
          {isAuthentication ? <Create /> : <Redirect to="/login" />}
        </Route>
        <Route path="/dashboard/update/:id">
          {isAuthentication ? <Update /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
