import "./App.css";
import { useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./JS/actions";

import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
  // const loading = useSelector((state) => state.userReducer.loading);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  // const user = useSelector((state) => state.userReducer.user);

  console.log(isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <Register {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />

        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
