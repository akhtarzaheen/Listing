import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Pages/Dashboard";
function App() {
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  let isAuth = "";
  if (isAuth) {
    isAuth = userCredentials[1].isAuth;
  }
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {isAuth && userCredentials ? <Dashboard /> : <Login />}
          {/* {!userCredentials && <Login />} */}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          {isAuth && userCredentials ? <Dashboard /> : <Redirect to="/" />}
          {/* {!userCredentials && <Login />} */}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
